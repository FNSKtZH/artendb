'use strict';
function(head, req) {

	start({
		"headers": {
			"Content-Type": "text/csv",
			"Content-disposition": "attachment;filename=Arten.json",
			"Accept-Charset": "utf-8"
		}
	});

	var row,
		doc,
		export_json = {},
		art,
		i, j, k;

	export_json.docs = [];

	// specify that we're providing a JSON response
	provides('json', function() {

		while (row = getRow()) {
			doc = row.doc;
			art = {};
			art._id = doc._id;
			art.Typ = "Arteigenschaft";
			for (i=0; i<doc.Eigenschaftensammlungen.length; i++) {
				if (doc.Eigenschaftensammlungen[i].Name === "ZH GIS") {
					art.ArtGruppe = doc.Eigenschaftensammlungen[i].Eigenschaften["GIS-Layer"];
					art.ArtGruppe = art.ArtGruppe.replace('ae', 'ä').replace('oe', 'ö').replace('ue', 'ü');
					break;
				}
			}
			art["Taxonomie ID"] = doc.Taxonomie.Eigenschaften["Taxonomie ID"];
			art.Artname = doc.Taxonomie.Eigenschaften["Artname vollständig"];
			// Hinweis Verwandschaft
			if (doc.Gruppe === "Flora" && doc.Beziehungssammlungen) {
				for (j=0; j<doc.Beziehungssammlungen.length; j++) {
					if (doc.Beziehungssammlungen[j].Name === "SISF Index 2 (2005): offizielle Art") {
						if (doc.Beziehungssammlungen[j].Beziehungen && doc.Beziehungssammlungen[j].Beziehungen[0] && doc.Beziehungssammlungen[j].Beziehungen[0].Beziehungspartner && doc.Beziehungssammlungen[j].Beziehungen[0].Beziehungspartner[0] && doc.Beziehungssammlungen[j].Beziehungen[0].Beziehungspartner[0].Name) {
							art.HinweisVerwandschaft = "Achtung: Synonym von " + doc.Beziehungssammlungen[j].Beziehungen[0].Beziehungspartner[0].Name;
						}
						break;
					}
				}
			}
			if (doc.Gruppe === "Moose") {
				for (k=0; k<doc.Beziehungssammlungen.length; k++) {
					if (doc.Beziehungssammlungen[k].Name === "NISM (2010): akzeptierte Referenz") {
						if (doc.Beziehungssammlungen[k].Beziehungen && doc.Beziehungssammlungen[k].Beziehungen[0] && doc.Beziehungssammlungen[k].Beziehungen[0].Beziehungspartner && doc.Beziehungssammlungen[k].Beziehungen[0].Beziehungspartner[0] && doc.Beziehungssammlungen[k].Beziehungen[0].Beziehungspartner[0].Name) {
							art.HinweisVerwandschaft = "Achtung: Synonym von " + doc.Beziehungssammlungen[k].Beziehungen[0].Beziehungspartner[0].Name;
						}
						break;
					}
				}
			}
			if (doc.Gruppe === "Macromycetes") {
				// bei Pilzen fehlt momentan in arteigenschaften.ch der GIS-Layer
				art.ArtGruppe = "Pilze";
			}
			export_json.docs.push(art);
		}
		send(JSON.stringify(export_json));
	});
}
﻿function(doc) {
	if (doc.Gruppe && doc.Gruppe === "Fauna") {
		emit ([doc["Aktuelle Taxonomie"].Felder.Klasse, doc["Aktuelle Taxonomie"].Felder.Ordnung, doc["Aktuelle Taxonomie"].Felder.Familie, doc["Aktuelle Taxonomie"].Felder["Artname vollständig"]], doc._id);
	}
}
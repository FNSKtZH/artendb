function erstelleBaum(Gruppe) {
	var baum;
	baum = [];
	$db = $.couch.db("artendb");
	if (Gruppe === "Fauna") {
		$db.view('artendb/baum_fauna_klasse?group=true', {
			success: function (fauna_klasse) {
				$db.view('artendb/baum_fauna_ordnung?group=true', {
					success: function (fauna_ordnung) {
						$db.view('artendb/baum_fauna_familie?group=true', {
							success: function (fauna_familie) {
								$db.view('artendb/baum_fauna_art', {
									success: function (fauna_art) {
										var baum, child_klasse, klasse, child_ordnung, children_ordnung, ordnung, child_familie, children_familie, familie, child_art, children_art, art;
										baum = [];
										for (i in fauna_klasse.rows) {
											klasse = fauna_klasse.rows[i].key;
											children_ordnung = [];
											for (k in fauna_ordnung.rows) {
												if (fauna_ordnung.rows[k].key[0] === klasse) {
													ordnung = fauna_ordnung.rows[k].key[1];
													children_familie = [];
													for (l in fauna_familie.rows) {
														if (fauna_familie.rows[l].key[0] === klasse && fauna_familie.rows[l].key[1] === ordnung) {
															familie = fauna_familie.rows[l].key[2];
															children_art = [];
															for (n in fauna_art.rows) {
																if (fauna_art.rows[n].key[0] === klasse && fauna_art.rows[n].key[1] === ordnung && fauna_art.rows[n].key[2] === familie) {
																	art = fauna_art.rows[n].key[3];
																	child_art = {
																			"data": art,
																			"attr": {"id": fauna_art.rows[n].value}
																		};
																	children_art.push(child_art);
																}
															}
															child_familie = {
																	"data": familie,
																	"children": children_art
																};
															children_familie.push(child_familie);
														}
													}
													child_ordnung = {
															"data": ordnung,
															"children": children_familie
														};
													children_ordnung.push(child_ordnung);
												}
											}
											child_klasse = {
													"data": klasse,
													"children": children_ordnung
												};
											baum.push(child_klasse);
										}
										erstelleTree(baum);
									}
								});
							}
						});
					}
				});
			}
		});
	} else if (Gruppe === "Flora") {
		$db.view('artendb/baum_flora_familie?group=true', {
			success: function (flora_familie) {
				$db.view('artendb/baum_flora_gattung?group=true', {
					success: function (flora_gattung) {
						$db.view('artendb/baum_flora_art', {
							success: function (flora_art) {
								var baum, child_familie, familie, child_gattung, children_gattung, gattung, child_art, children_art, art;
								baum = [];
								for (i in flora_familie.rows) {
									familie = flora_familie.rows[i].key;
									children_gattung = [];
									for (k in flora_gattung.rows) {
										if (flora_gattung.rows[k].key[0] === familie) {
											gattung = flora_gattung.rows[k].key[1];
											children_art = [];
											for (n in flora_art.rows) {
												if (flora_art.rows[n].key[0] === familie && flora_art.rows[n].key[1] === gattung) {
													art = flora_art.rows[n].key[2];
													child_art = {
															"data": art,
															"attr": {"id": flora_art.rows[n].value}
														};
													children_art.push(child_art);
												}
											}
											child_gattung = {
													"data": gattung,
													"children": children_art
												};
											children_gattung.push(child_gattung);
										}
									}
									child_familie = {
											"data": familie,
											"children": children_gattung
										};
									baum.push(child_familie);
								}
								erstelleTree(baum);
							}
						});
					}
				});
			}
		});
	} else if (Gruppe === "Moose") {
		$db.view('artendb/baum_moose_klasse?group=true', {
			success: function (moose_klasse) {
				$db.view('artendb/baum_moose_familie?group=true', {
					success: function (moose_familie) {
						$db.view('artendb/baum_moose_gattung?group=true', {
							success: function (moose_gattung) {
								$db.view('artendb/baum_moose_art', {
									success: function (moose_art) {
										var baum, child_klasse, klasse, child_familie, children_familie, familie, child_gattung, children_gattung, gattung, child_art, children_art, art;
										baum = [];
										for (i in moose_klasse.rows) {
											klasse = moose_klasse.rows[i].key;
											children_familie = [];
											for (k in moose_familie.rows) {
												if (moose_familie.rows[k].key[0] === klasse) {
													familie = moose_familie.rows[k].key[1];
													children_gattung = [];
													for (l in moose_gattung.rows) {
														if (moose_gattung.rows[l].key[0] === klasse && moose_gattung.rows[l].key[1] === familie) {
															gattung = moose_gattung.rows[l].key[2];
															children_art = [];
															for (n in moose_art.rows) {
																if (moose_art.rows[n].key[0] === klasse && moose_art.rows[n].key[1] === familie && moose_art.rows[n].key[2] === gattung) {
																	art = moose_art.rows[n].key[3];
																	child_art = {
																			"data": art,
																			"attr": {"id": moose_art.rows[n].value}
																		};
																	children_art.push(child_art);
																}
															}
															child_gattung = {
																	"data": gattung,
																	"children": children_art
																};
															children_gattung.push(child_gattung);
														}
													}
													child_familie = {
															"data": familie,
															"children": children_gattung
														};
													children_familie.push(child_familie);
												}
											}
											child_klasse = {
													"data": klasse,
													"children": children_familie
												};
											baum.push(child_klasse);
										}
										erstelleTree(baum);
									}
								});
							}
						});
					}
				});
			}
		});
	} else if (Gruppe === "Macromycetes") {
		$db.view('artendb/baum_macromycetes_gattung?group=true', {
			success: function (macromycetes_gattung) {
				$db.view('artendb/baum_macromycetes_art', {
					success: function (macromycetes_art) {
						var baum, child_gattung, gattung, child_art, children_art, art;
						baum = [];
						for (k in macromycetes_gattung.rows) {
							gattung = macromycetes_gattung.rows[k].key;
							children_art = [];
							for (n in macromycetes_art.rows) {
								if (macromycetes_art.rows[n].key[0] === gattung) {
									art = macromycetes_art.rows[n].key[1];
									child_art = {
											"data": art,
											"attr": {"id": macromycetes_art.rows[n].value}
										};
									children_art.push(child_art);
								}
							}
							child_gattung = {
									"data": gattung,
									"children": children_art
								};
							baum.push(child_gattung);
						}
						erstelleTree(baum);
					}
				});
			}
		});
	} else if (Gruppe === "Lebensräume") {
		$db.view('artendb/baum_lr?group_level=1', {
			success: function (level1) {
				$db.view('artendb/baum_lr?group_level=2', {
					success: function (level2) {
						$db.view('artendb/baum_lr?group_level=3', {
							success: function (level3) {
								$db.view('artendb/baum_lr?group_level=4', {
									success: function (level4) {
										var baum, child_level1, level1_lr, child_level2, children_level2, level2_lr, child_level3, children_level3, level3_lr, child_level4, children_level4, level4_lr;
										baum = [];
										for (i in level1.rows) {
											level1_lr = level1.rows[i].key[0].Name;
											children_level2 = [];
											for (k in level2.rows) {
												if (level2.rows[k].key[1] && level2.rows[k].key[0].Name === level1_lr) {
													level2_lr = level2.rows[k].key[1].Name;
													children_level3 = [];
													for (l in level3.rows) {
														if (level3.rows[l].key[2] && level3.rows[l].key[0].Name === level1_lr && level3.rows[l].key[1].Name === level2_lr) {
															level3_lr = level3.rows[l].key[2].Name;
															children_level4 = [];
															for (n in level4.rows) {
																if (level4.rows[n].key[3] && level4.rows[n].key[0].Name === level1_lr && level4.rows[n].key[1].Name === level2_lr && level4.rows[n].key[2].Name === level3_lr) {
																	level4_lr = level4.rows[n].key[3].Name;
																	child_level4 = {
																			"data": level4_lr,
																			"attr": {"id": level4.rows[n].key[3].GUID}
																		};
																	children_level4.push(child_level4);
																}
															}
															child_level3 = {
																	"data": level3_lr,
																	"attr": {"id": level3.rows[l].key[2].GUID},
																	"children": children_level4
																};
															children_level3.push(child_level3);
														}
													}
													child_level2 = {
															"data": level2_lr,
															"attr": {"id": level2.rows[k].key[1].GUID},
															"children": children_level3
														};
													children_level2.push(child_level2);
												}
											}
											child_level1 = {
													"data": level1_lr,
													"attr": {"id": level1.rows[i].key[0].GUID},
													"children": children_level2
												};
											baum.push(child_level1);
										}
										erstelleTree(baum);
									}
								});
							}
						});
					}
				});
			}
		});
	}
}

function erstelleTree(baum) {
	$("#tree").jstree({
		"json_data": {
			"data": baum
		},
		"core": {
			"open_parents": true,	//wird ein node programmatisch geöffnet, öffnen sich alle parents
			"strings": {	//Deutsche Übersetzungen
				"loading": "hole Daten..."
			}
		},
		"ui": {
			"select_limit": 1,	//nur ein Datensatz kann aufs mal gewählt werden
			"selected_parent_open": true,	//wenn Code einen node wählt, werden alle parents geöffnet
			"select_prev_on_delete": true
		},
		"search": {
			"case_insensitive": true,
			"show_only_matches": true
		},
		"themes": {
			"icons": false
		},
		"plugins" : ["themes", "json_data", "ui", "search"]
	})
	.bind("select_node.jstree", function (e, data) {
		var node;
		node = data.rslt.obj;
		jQuery.jstree._reference(node).open_node(node);
		if (node.attr("id")) {
			//verhindern, dass bereits offene Seiten nochmals geöffnet werden
			if (!$("#art").is(':visible') || localStorage.art_id !== node.attr("id")) {
				localStorage.art_id = node.attr("id");
				//Anzeige im Formular initiieren. ID und Datensammlung übergeben
				initiiere_art(node.attr("id"));
				$("#forms").show();
			}
		}
	})
	.bind("loaded.jstree", function (event, data) {
		$("#suchen").show();
		setzeTreehoehe();
	})
	.bind("after_open.jstree", function (e, data) {
		setzeTreehoehe();
	})
	.bind("after_close.jstree", function (e, data) {
		setzeTreehoehe();
	});
}

function initiiere_art(id) {
	$db = $.couch.db("artendb");
	$db.openDoc(id, {
		success: function (art) {
			var htmlArt, htmlDatensammlung;
			//accordion beginnen
			htmlArt = '<div id="accordion_ds" class="accordion">';
			for (i in art) {
				//nur Datensammlungen anzeigen
				if (art[i].Typ === "Datensammlung") {
					//Accordion-Gruppe und -heading anfügen
					htmlDatensammlung = '<div class="accordion-group"><div class="accordion-heading accordion-group_gradient">';
					//die id der Gruppe wird mit dem Namen der Datensammlung gebildet. Hier müssen aber leerzeichen entfernt werden
					htmlDatensammlung += '<a class="accordion-toggle Datensammlung" data-toggle="collapse" data-parent="#accordion_ds" href="#collapse' + i.replace(/ /g,'') + '"><strong>';
					//Titel für die Datensammlung einfügen
					htmlDatensammlung += i;
					//header abschliessen
					htmlDatensammlung += '</strong></a></div>';
					//body beginnen
					htmlDatensammlung += '<div id="collapse' + i.replace(/ /g,'') + '" class="accordion-body collapse"><div class="accordion-inner">';
					//Datensammlung beschreiben
					htmlDatensammlung += '<div class="Datensammlung BeschreibungDatensammlung">';
					if (art[i].Beschreibung) {
						htmlDatensammlung += art[i].Beschreibung;
					}
					if (art[i].Datenstand) {
						htmlDatensammlung += '. Stand: ';
						htmlDatensammlung += art[i].Datenstand;
					}
					if (art[i]["Link"]) {
						htmlDatensammlung += '. <a href="';
						htmlDatensammlung += art[i]["Link"];
						htmlDatensammlung += '">';
						htmlDatensammlung += art[i]["Link"];
						htmlDatensammlung += '</a>';
					}
					//Beschreibung der Datensammlung abschliessen
					htmlDatensammlung += '</div>';
					//Felder anzeigen
					for (y in art[i].Felder) {
						if (((y === "Offizielle Art" || y === "Eingeschlossen in" || y === "Synonym von") && art.Gruppe === "Flora") || (y === "Akzeptierte Referenz" && art.Gruppe === "Moose")) {
							//dann den Link aufbauen lassen
							htmlDatensammlung += generiereHtmlFuerLinkZuGleicherGruppe(y, art[i].Felder[y].GUID, art[i].Felder[y].Name);
						} else if ((y === "Gültige Namen" || y === "Eingeschlossene Arten" || y === "Synonyme") && art.Gruppe === "Flora") {
							//das ist ein Array von Objekten
							htmlDatensammlung += generiereHtmlFuerLinksZuGleicherGruppe(y, art[i].Felder[y]);
						} else if ((y === "Artname" && art.Gruppe === "Flora") || ((y === "Parent" || y === "Hierarchie") && art.Gruppe === "Lebensräume")) {
							//dieses Feld nicht anzeigen
						} else if (typeof art[i].Felder[y] === "string" && art[i].Felder[y].slice(0, 10) === "http://www") {
							//www-Links als Link darstellen
							htmlDatensammlung += generiereHtmlFuerWwwlink(y, art[i].Felder[y]);
						} else if (typeof art[i].Felder[y] === "string" && art[i].Felder[y].length < 70) {
							htmlDatensammlung += generiereHtmlFuerTextinput(y, art[i].Felder[y], "text");
						} else if (typeof art[i].Felder[y] === "string" && art[i].Felder[y].length >= 70) {
							htmlDatensammlung += generiereHtmlFuerTextarea(y, art[i].Felder[y]);
						} else if (typeof art[i].Felder[y] === "number") {
							htmlDatensammlung += generiereHtmlFuerTextinput(y, art[i].Felder[y], "number");
						} else if (typeof art[i].Felder[y] === "boolean") {
							htmlDatensammlung += generiereHtmlFuerBoolean(y, art[i].Felder[y]);
						} else {
							htmlDatensammlung += generiereHtmlFuerTextinput(y, art[i].Felder[y], "text");
						}
					}
					//body und Accordion-Gruppe abschliessen
					htmlDatensammlung += '</div></div></div>';
					//Datensammlung (=Accordion-Gruppe) hinzufügen
					htmlArt += htmlDatensammlung;
				}
			}
			//accordion beenden
			htmlArt += '</div>';
			$("#art").html(htmlArt);
			setzteHöheTextareas();
			//jetzt die Links im Menu setzen
			setzteLinksZuBilderUndWikipedia(art);
		},
		error: function () {
			//melde("Fehler: Art konnte nicht geöffnet werden");
		}
	});
}

//managt die Links zu Google Bilder und Wikipedia
//erwartet das Objekt mit der Art
function setzteLinksZuBilderUndWikipedia(art) {
	//jetzt die Links im Menu setzen
	var googleBilderLink = "";
	var wikipediaLink = "";;
	switch (art.Gruppe) {
		case "Flora":
			googleBilderLink = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Index.Felder.Artname + '"';
			if (art.Index.Felder['Deutsche Namen']) {
				googleBilderLink += '+OR+"' + art.Index.Felder['Deutsche Namen'] + '"';
			}
			if (art.Index.Felder['Name Französisch']) {
				googleBilderLink += '+OR+"' + art.Index.Felder['Name Französisch'] + '"';
			}
			if (art.Index.Felder['Name Italienisch']) {
				googleBilderLink += '+OR+"' + art.Index.Felder['Name Italienisch'] + '"';
			}
			if (art.Index.Felder['Deutsche Namen']) {
				wikipediaLink = 'http://de.wikipedia.org/wiki/' + art.Index.Felder['Deutsche Namen'];
			} else {
				wikipediaLink = 'http://de.wikipedia.org/wiki/' + art.Index.Felder.Artname;
			}
			break;
		case "Fauna":
			googleBilderLink = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Index.Felder.Artname + '"';
			if (art.Index.Felder["Name Deutsch"]) {
				googleBilderLink += '+OR+"' + art.Index.Felder['Name Deutsch'] + '"';
			}
			if (art.Index.Felder['Name Französisch']) {
				googleBilderLink += '+OR+"' + art.Index.Felder['Name Französisch'] + '"';
			}
			if (art.Index.Felder['Name Italienisch']) {
				googleBilderLink += '+OR"' + art.Index.Felder['Name Italienisch'] + '"';
			}
			wikipediaLink = 'http://de.wikipedia.org/wiki/' + art.Index.Felder.Gattung + '_' + art.Index.Felder.Art;
			break;
		case 'Moose':
			googleBilderLink = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Index.Felder.Gattung + ' ' + art.Index.Felder.Art + '"';
			wikipediaLink = 'http://de.wikipedia.org/wiki/' + art.Index.Felder.Gattung + '_' + art.Index.Felder.Art;
			break;
		case 'Macromycetes':
			googleBilderLink = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Index.Felder.Name + '"';
			if (art.Index.Felder['Name Deutsch']) {
				googleBilderLink += '+OR+"' + art.Index.Felder['Name Deutsch'] + '"';
			}
			wikipediaLink = 'http://de.wikipedia.org/wiki/' + art.Index.Felder.Name;
			break;
		case 'Lebensräume':
			googleBilderLink = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Index.Felder.Einheit;
			wikipediaLink = 'http://de.wikipedia.org/wiki/' + art.Index.Felder.Einheit;
			break;
	}
	//mit replace Hochkommata ' ersetzen, sonst klappt url nicht
	$("#GoogleBilderLink").attr("href", encodeURI(googleBilderLink).replace("&#39;", "%20"));
	$("#GoogleBilderLink_li").removeClass("disabled");
	//$("#GoogleBilderLink").attr("href", encodeURI(googleBilderLink.replace(/'/g, " ")));
	$("#WikipediaLink").attr("href", wikipediaLink);
	$("#WikipediaLink_li").removeClass("disabled");
}

//generiert den html-Inhalt für einzelne Links in Flora
function generiereHtmlFuerLinkZuGleicherGruppe(FeldName, id, Artname) {
	var HtmlContainer;
	HtmlContainer = '<div class="control-group"><label class="control-label">';
	HtmlContainer += FeldName;
	HtmlContainer += ':</label><a href="#" class="LinkZuArtGleicherGruppe feldtext controls" ArtId="';
	HtmlContainer += id;
	HtmlContainer += '">';
	HtmlContainer += Artname;
	HtmlContainer += '</a></div>';
	return HtmlContainer;
}

//generiert den html-Inhalt für Serien von Links in Flora
function generiereHtmlFuerLinksZuGleicherGruppe(FeldName, Objektliste) {
	var HtmlContainer;
	HtmlContainer = '<div class="control-group"><label class="control-label">';
	HtmlContainer += FeldName;
	HtmlContainer += ':</label><span class="feldtext controls">';
	for (a in Objektliste) {
		if (a > 0) {
			HtmlContainer += ', ';
		}
		HtmlContainer += '<a href="#" class="LinkZuArtGleicherGruppe controls" ArtId="';
		HtmlContainer += Objektliste[a].GUID;
		HtmlContainer += '">';
		HtmlContainer += Objektliste[a].Name;
		HtmlContainer += '</a>';
	}
	HtmlContainer += '</span></div>';
	return HtmlContainer;
}

//generiert den html-Inhalt für einzelne Links in Flora
function generiereHtmlFuerWwwlink(FeldName, FeldWert) {
	var HtmlContainer;
	HtmlContainer = '<div class="control-group"><label class="control-label">';
	HtmlContainer += FeldName;
	HtmlContainer += ':</label><a href="';
	HtmlContainer += FeldWert;
	HtmlContainer += '" class="feldtext controls ">';
	HtmlContainer += FeldWert;
	HtmlContainer += '</a></div>';
	return HtmlContainer;
}

//generiert den html-Inhalt für Textinputs
function generiereHtmlFuerTextinput(FeldName, FeldWert, InputTyp) {
	var HtmlContainer;
	HtmlContainer = '<div class="control-group">\n\t<label class="control-label" for="';
	HtmlContainer += FeldName;
	HtmlContainer += '">';
	HtmlContainer += FeldName;
	HtmlContainer += ':</label>\n\t<input class="controls" id="';
	HtmlContainer += FeldName;
	HtmlContainer += '" name="';
	HtmlContainer += FeldName;
	HtmlContainer += '" type="';
	HtmlContainer += InputTyp;
	HtmlContainer += '" value="';
	HtmlContainer += FeldWert;
	HtmlContainer += '" readonly="readonly"/>\n</div>';
	return HtmlContainer;	
}

//generiert den html-Inhalt für Textarea
function generiereHtmlFuerTextarea(FeldName, FeldWert) {
	var HtmlContainer;
	HtmlContainer = '<div class="control-group"><label class="control-label" for="';
	HtmlContainer += FeldName;
	HtmlContainer += '">';
	HtmlContainer += FeldName;
	HtmlContainer += ':</label><textarea class="controls" id="';
	HtmlContainer += FeldName;
	HtmlContainer += '" name="';
	HtmlContainer += FeldName;
	HtmlContainer += '" readonly="readonly">';
	HtmlContainer += FeldWert;
	HtmlContainer += '</textarea></div>';
	return HtmlContainer;	
}

//generiert den html-Inhalt für ja/nein-Felder
function generiereHtmlFuerBoolean(FeldName, FeldWert) {
	var HtmlContainer;
	HtmlContainer = '<div class="control-group"><label class="control-label" for="';
	HtmlContainer += FeldName;
	HtmlContainer += '">';
	HtmlContainer += FeldName;
	HtmlContainer += ':</label><input class="controls" type="checkbox" id="';
	HtmlContainer += FeldName;
	HtmlContainer += '" name="';
	HtmlContainer += FeldName;
	if (FeldWert === true) {
		HtmlContainer += '" checked="true">';
	} else {
		HtmlContainer += '">';
	}
	HtmlContainer += '</div>';
	return HtmlContainer;
}

//begrenzt die maximale Höhe des Baums auf die Seitenhöhe, wenn nötig
function setzeTreehoehe() {
	if ($(window).width() > 1000) {
		$("#tree").css("max-height", $(window).height() - 149);
	} else {
		//Spalten sind untereinander. Baum etwas weniger hoch, damit Formulare zum raufschieben immer erreicht werden können
		$("#tree").css("max-height", $(window).height() - 190);
	}
}

//setzt die Höhe von textareas so, dass der Text genau rein passt
function FitToContent(id, maxHeight) {
	var text = id && id.style ? id : document.getElementById(id);
	if (!text) {
		return;
	}

	/* Accounts for rows being deleted, pixel value may need adjusting */
	if (text.clientHeight == text.scrollHeight) {
		text.style.height = "30px";
	}

	var adjustedHeight = text.clientHeight;
	if (!maxHeight || maxHeight > adjustedHeight) {
		adjustedHeight = Math.max(text.scrollHeight, adjustedHeight);
	}
	if (maxHeight) {
		adjustedHeight = Math.min(maxHeight, adjustedHeight);
	}
	if (adjustedHeight > text.clientHeight) {
		text.style.height = adjustedHeight + "px";
	}
}

function setzteHöheTextareas() {
	$('form').each(function() {
		$('textarea').each(function () {
			$(this).trigger('focus');
		});
	});
}

function schliesseNichtMarkierteNodes() {
	//wenn Suchfeld leer ist, soll der Baum zugeklappt werden
	if (!$("#suchfeld").val()) {
		$("#tree").jstree("clear_search");
		var selected_nodes = $("#tree").jstree("get_selected");
		$("#tree").jstree("close_all", -1);
		$("#tree").jstree("deselect_all", -1);
		//wenn eine Art gewählt war, diese wieder wählen
		if (selected_nodes.length === 1) {
			$("#tree").jstree("select_node", selected_nodes);
		}
	}
}
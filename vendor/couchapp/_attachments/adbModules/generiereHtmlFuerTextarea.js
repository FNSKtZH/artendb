// generiert den html-Inhalt für Textarea

'use strict'

module.exports = function (feldname, feldwert, dsTyp, dsName) {
  var html

  html = '<div class="form-group"><label class="control-label" for="'
  html += feldname
  html += '">'
  html += feldname
  html += ':</label><textarea class="controls form-control" id="'
  html += feldname
  html += '" name="'
  html += feldname
  html += '" readonly="readonly" dsTyp="' + dsTyp + '" dsName="' + dsName + '">'
  html += feldwert
  html += '</textarea></div>'

  return html
}

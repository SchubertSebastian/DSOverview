# Sachstandsbericht 2019_4_11Digital Signage Overview
### Zusammenfassung

Wir haben eine html Seite erstellt die später die von Xibo ausgelesenen Displaygroups und Displays anzeigt.

<img src="20190410_093211.jpg" width="350" title="hover text"> 

### Abruf der Daten von Xibo

Zurzeit haben wird an der Verbindung zu Xibo gearbeitet. Den dafür benötigten Code konnte man in Postman generieren lassen.

<img src="20190410_093945.jpg" width="350" title="hover text">

Leider spärte der Browser die Abfrage und wir bekamen kinen Access Token, Der Fehler war ein [ Cros origin error ], das ist eine schutzmasnahme von dem Browser um " Men in the middle Attacs " zu verhindern.

<img src="20190410_094830.jpg" width="350" title="hover text"> 

Nach einer langen Reschersche fanden wir heraus, dass das hinzufügen von [ dataTyp = "jsonp" ] das Problem "löst"
Nun bekommen wir einen json object zurück. Es ist leider nur eine Fehlermeldung das keine Seite gefunden wurde.


### Postman

Mit Postman generieren wir den Code für API-Calls. Wir haben ein Tutorial befolgt, um mit Postman auf die API zugreifen zu können. Weil wir eine [Collection] in Postman importiert haben, müssen wir den Code nicht selber schreiben. Wir müssen nur ergänzen, dass der responseType = json ist.

### Webcomponens 

Anstatt einer Ajax Abfrage mit JQeury haben Sie gesagt das wie Webcommponens verwenden sollen. Dewegen sind wir gerade dabei, die von Ihnen bereitgestelt Unterlagen zu studieren und zu lehrnen wie und was Webcommponens sind und wie man diese nutzt. 
 
### Lösung von Abfrage Problem

Sie haben gesagt ,dass Sie eine Server erställen der die Abfrage übernimmt.
Auf diesen müssen wir dann mit "unserem" zugreifen und die Daten zu der Webseite schicke
Wir wollten aber alles mit JS lösen und haben des wegen keinen Server eingeplant.
Also wollten wir fragen welchen wir nutzen sollen, um es für Sie anzupassen.



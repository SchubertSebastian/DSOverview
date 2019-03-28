var form = new FormData();
form.append("client_id", "zCS2m6epaKVM08EvSc5hfPA8dX0HmSa2P54RMyBV");
form.append("client_secret", "7aX3R6xvKdcujTiHukBXHshpyjndeM54cCU3PQHmOooCD4TVA6i5brj2UUEa95GEZnq0NFnh84vywexn3GQeM6TFMBuPSbbVB0A246YiGKhMfWQ2OHpNlzDO2GtYNk8fueQv67CyJWwMSxOoLUB8gPqSMrqDsUNxc2CU8KpJacrDUSix78Qn6N3IolQvfRRIAlEyo07HB3RxOWdU11vNF6rZjp7zdCLZPDMVQUgpsO9E07Gv8F1TJ0DveiI22y");
form.append("grant_type", "client_credentials");
form.append("accss_token", "PURm2F73GsPXcTD0ev7xv2Jz5dvgV0QtgoPbDoLL");

var settings = {
  "async": true,
  "crossDomain": true,
  "dataType": 'jsonp',
  "url": "http://localhost/api/authorize/access_token",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer PURm2F73GsPXcTD0ev7xv2Jz5dvgV0QtgoPbDoLL",
    "cache-control": "no-cache",
    "Postman-Token": "672881f8-e55d-4ba6-95d1-8a02f8f978f0"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/*
var form = new FormData();
form.append("client_id", "zCS2m6epaKVM08EvSc5hfPA8dX0HmSa2P54RMyBV");
form.append("client_secret", "7aX3R6xvKdcujTiHukBXHshpyjndeM54cCU3PQHmOooCD4TVA6i5brj2UUEa95GEZnq0NFnh84vywexn3GQeM6TFMBuPSbbVB0A246YiGKhMfWQ2OHpNlzDO2GtYNk8fueQv67CyJWwMSxOoLUB8gPqSMrqDsUNxc2CU8KpJacrDUSix78Qn6N3IolQvfRRIAlEyo07HB3RxOWdU11vNF6rZjp7zdCLZPDMVQUgpsO9E07Gv8F1TJ0DveiI22y");
form.append("grant_type", "client_credentials");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost/api/display",
  "method": "GET",
  "headers": {
    "": "",
    "Authorization": "Bearer PURm2F73GsPXcTD0ev7xv2Jz5dvgV0QtgoPbDoLL",
    "cache-control": "no-cache",
    "Postman-Token": "7a530704-4dfd-489d-804c-87cdd1f11b81"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

*/

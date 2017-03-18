insert into phoenixschema.users (address1, address2,adultcheck,city,country,countrycode,email,firstname,idusers,lastmodifieddate,lastname,state,termsofuse_fkidtermsofuse,termsofuseaccepted,termsofuseaccepteddate,zip)
values ('add1','add2','Y','city','India','IN', 'a@g.com','arch',2, current_date, 'mus','NJ',NULL,'Y',current_date,'08831');
commit;

INSERT INTO phoenixschema.termsofuse(
	idtermsofuse, termsofusecontent, lastmodified, termsofuseversion)
	VALUES (1, 'Terms of use', current_date, 1);

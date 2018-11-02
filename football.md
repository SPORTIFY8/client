# rest-api
**Show TEAMS IN A COMPETITION**
----
  Returns json data about all teams participate in a competition.

* **URL**

  /football/standings/:competition_id

* **Method:**

  `GET`
  
*  **Data Params**

   **Required:**
 
   `competition_id=[integer]`

* **URL Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    [
	{
		"position": 1,
		"team": {
			"id": 109,
			"name": "Juventus FC",
			"crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/d2/Juventus_Turin.svg"
		},
		"playedGames": 10,
		"won": 9,
		"draw": 1,
		"lost": 0,
		"points": 28,
		"goalsFor": 21,
		"goalsAgainst": 7,
		"goalDifference": 14
	}, ... ]`
 
* **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "message": "Please Sign In first" }`

**Get Top Scorers In A Competition**
----
  Returns json data about Top Scorers In A Competition.

* **URL**

  /football/scorers/:competition_id

* **Method:**

  `GET`
  
*  **Data Params**

   **Required:**
 
   None

* **URL Params**

    **Required:**
 
   `competition_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
	{
		"player": {
			"id": 10203,
			"name": "Krzysztof Piątek",
			"firstName": "Krzysztof",
			"lastName": null,
			"dateOfBirth": "1995-07-01",
			"countryOfBirth": "Poland",
			"nationality": "Poland",
			"position": "Attacker",
			"shirtNumber": 9,
			"lastUpdated": "2018-11-02T05:12:15Z"
		},
		"team": {
			"id": 107,
			"name": "Genoa CFC"
		},
		"numberOfGoals": 9
	}, ... ]`
 
* **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "message": "Please Sign In first" }`

**Matches of a football club**
----
  Returns json token of all matches in a season.

* **URL**

  /football/matches/:club_id

* **Method:**

  `GET`
  
*  **Body**

   **Required:**
 
    None

* **URL Params**

    **Required:**
 
   `club_id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        previous : [{"score": {
				"winner": "AWAY_TEAM",
				"duration": "REGULAR",
				"fullTime": {
					"homeTeam": 0,
					"awayTeam": 2
				} }, ... ]
        next: [{"score": {
				"winner": "null",
				"duration": "REGULAR",
				"fullTime": {
					"homeTeam": null,
					"awayTeam": null
				} }, ... ]
    }`
 
* **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "message": "Sign in First" }`

**Get Detail of a team**
----
  return detail of a team

* **URL**

  /football/teams/:club_id

* **Method:**

  `GET`
  
*  **Body**

   **Required:**

    None

* **URL Params**

    **Required:**
 
   `club_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `"name": "Manchester City FC",
	"shortName": "Man City",
	"tla": "MNC",
	"crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
	"address": "SportCity Manchester M11 3FF",
	"phone": "+44 (0870) 0621894",
	"website": "https://www.mancity.com", ...`
 
* **Error Response:**
   * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "message": "Please Sign In first" }`       
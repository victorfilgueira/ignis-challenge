const getTextAreaInput = function() {
	const textAreaInput = document.getElementById('textarea');
	var ClubsArr = [];
	var arr = textAreaInput.value.split("\n");
	var i = 0;
	arr.forEach(line => {
		let [a, b] = line.split(";");
		ClubsArr[i] = {
			time: a,
			estado: b
		}
		i++;
	});

	console.log(ClubsArr);
	getMatchesArrangement(ClubsArr);
}

const getNumberOfMatchesCalculator = function(ClubsArr) {
	return ( (ClubsArr.length - 1) * ClubsArr.length - 2);
}

const getMatchesArrangement = function(ClubsArr) {
	var MatchesArr = [];
	var MatchesArrAux = [];
	var size = ClubsArr.length;

	var count = 0;

	for(let i = 0; i < size; i++) {
		for(let j = 0; j < size; j++) {
			
			if ( ClubsArr[i].time != ClubsArr[j].time ) {
				MatchesArr[count] = {
					time1: ClubsArr[i].time,
					time2: ClubsArr[j].time,
					cidade: ClubsArr[i].estado,
				}
				count++;
			}
		}
	}

	console.log(MatchesArr);
	console.log(MatchesArrAux);
	getRound1Matches(MatchesArr);
}

const getRound1Matches = function(MatchesArr) {
	var round1MatchesArr = [];

	round1MatchesArr[0] = MatchesArr[0];

	MatchesArr.forEach((match, i) => {
		if ( !(round1MatchesArr.some( e => (e.time1 === match.time1) || (e.time1 === match.time2 ) || (e.time2 === match.time1) || (e.time2 === match.time2) ) ) )
			{
				if ( MatchesArr[i] ) {
					round1MatchesArr[i] = MatchesArr[i];
				}
			}
	});
	
	console.log(round1MatchesArr);
	console.log(round1MatchesArr.length);
}

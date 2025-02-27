
const individuals = {
    _years: 18,
    _numWeeks: 936,
    _durationFour: 4,
    _durationSix: 6,
    _durationTwelve: 12,
    _durationSixteen: 16,
    _countm: 0,
    _countf: 0,
    _count: 0,
    _names: [],
    get names() {
        return this._names;
    },
    get weeks() {
        return this._numWeeks;
    },
    set weeks(weeks) {
        this._numWeeks = weeks;
        
    },
    rGen: function() {
        let value = (Math.floor(Math.random() * (this._durationSixteen -3) +3)); 
        return value;
    },
    removeTime: function(time) {
        if (this._numWeeks >= time) {
            this._numWeeks -= time;
            return true;
        } else {
            return false; 
        }
    },
    pickTimeAndRemoveTime: function() {
        let rando = this.rGen();
        let truthy = this.removeTime(rando);
        let maleFemale = Math.floor(Math.random() * 2)
        let age = (Math.floor(Math.random() * 54) + 14);
        if (maleFemale === 0 && truthy) {
            this._names[this._count] = {};
            this._names[this._count].number = this._count;
            this._names[this._count].gender = 'male';
            this._names[this._count].durationOfLIfe = rando;
            this._names[this._count].age = age;
            this._names[this._count].length = this._count;
            this._countm++;
        } else if (truthy) {
            this._names[this._count] = {};
            this._names[this._count].number = this._count;
            this._names[this._count].gender = 'female';
            this._names[this._count].durationOfLIfe = rando;
            this._names[this._count].age = age;
            this._names[this._count].length = this._count;
            this._countf++;
        }
        this._count++;
        return truthy;
        
    },
    placeIn: function(informaiton) {
        
    }
    
};

(() => {
    let $information = $('#information');
    let $mainText = $('<div>', {id:'maintext'});
    let $timeBeforeDeath = $('<div>', {id:'timeBeforeDeath'});
    let $container = $('<div>', {id: 'container'});
    let tValue = true
    while (tValue === true) {
       tValue = individuals.pickTimeAndRemoveTime()
    }

    let ffour = 0;
    let fsix = 0;
    let ftwelve = 0;
    let fsixteen = 0;
    let fcount = 0
    let mfour = 0;
    let msix = 0;
    let mtwelve = 0;
    let msixteen = 0;
    let mcount = 0
    for (let i = 0; i < individuals._names.length ; i++) {
        console.log(i);
        if (individuals._names[i].durationOfLIfe <= 4) {
            individuals._names[i].gender === 'male' ? mfour++ : ffour++;
        } else if (individuals._names[i].durationOfLIfe <= 6 && individuals._names[i].durationOfLIfe >= 4)  {
            individuals._names[i].gender === 'male' ? msix++ : fsix++;
        } else if (individuals._names[i].durationOfLIfe <= 12 && individuals._names[i].durationOfLIfe >= 6)   {
            individuals._names[i].gender === 'male' ? mtwelve++ : ftwelve++;
        } else if (individuals._names[i].durationOfLIfe <= 16 && individuals._names[i].durationOfLIfe >= 12)   {
            individuals._names[i].gender === 'male' ? msixteen++ : fsixteen++;
        }
           
    }
   
    $(document).ready(() => {
          let words = `${ffour} females killed and ${mfour} males killed within less than four weeks. ${fsix} females and ${msix} males killed within four to six
                  weeks. ${ftwelve} females killed and ${mtwelve} males killed within six to twelve weeks. ${fsixteen} females might survive longer and ${msixteen} 
                  males might survive longer over a period of eighteen years.`
        wordsOne = `<p>Assuming the team of corrupt federal police officers constantly harrass individuals. Over a duration of eighteen years, a theorized team of corrupt federal police officers could manage to kill via harrassment ${ffour+mfour} people who last less than four weeks. ${msix+fsix} people who last between four and six weeks ${mtwelve+ftwelve } people who live between six and twelve weeks or three months which leaves ${msixteen+fsixteen} people alive whom live for a duration of no less than twelve to sixteen weeks of constant harrassment. If they survive this duratoin they may or may not live for much longer durations. All up ${mcount+fcount} were harrassed and ${(mfour + msix + mtwelve+ffour + fsix + ftwelve)} people were killed.</p>`;

       
        let list = ''
        for (let i = 0; i < individuals._names.length ; i++) {
            
            list += `<p>${individuals._names[i].gender === 'male' ? 'John Doe' : 'Jane Doe'} survived `
            if (individuals._names[i].durationOfLIfe <= 12)   {
                    list += ' for '
                  } else {
                    list += ` past `;
                  }
            list += `${individuals._names[i].durationOfLIfe} weeks of intense harassment `; 
            if (individuals._names[i].durationOfLIfe <= 12)   {
          list += `and died at the age of ${individuals._names[i].age}.</p>`;
        
            } else {
                list += `.</p>`;
            }
        }
        $harrassed = $('<div>').append($('<h1>').append((individuals._names.length)+'<br>HARRASSED PEOPLE!'));
        $murdered = $('<div>').append($('<h1>').append((mfour + msix + mtwelve+ffour + fsix + ftwelve)+'<br>DEAD PEOPLE!'));
        $mainText.append(wordsOne+words);
        $timeBeforeDeath.append(list);
        $container.append($harrassed);
        $container.append($murdered);
        $container.append($mainText);
        $container.append($timeBeforeDeath);
        $information.append($container);
      });    
})();
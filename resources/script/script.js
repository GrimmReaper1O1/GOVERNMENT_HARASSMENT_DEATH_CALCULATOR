
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
    _names: {
        'john doe': {},
        'jane doe': {},
        
    },
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
     
        if (maleFemale === 0 && truthy) {
            this._names['john doe']['person'+this._countm] = rando;
            this._names['john doe'].length = this._countm;
            this._countm++;
        } else if (truthy) {
            this._names['jane doe']['person'+this._countf] = rando;
            this._names['jane doe'].length = this._countf;
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
    for (let i = 0; i <= individuals._names['john doe'].length ; i++) {
        console.log('here');
        if (individuals._names['john doe']['person'+i] <= 4) {
            mfour++;
        } else if (individuals._names['john doe']['person'+i] <= 6 && individuals._names['john doe']['person'+i] >= 4)  {
            msix++;
        } else if (individuals._names['john doe']['person'+i] <= 12 && individuals._names['john doe']['person'+i] >= 6)   {
            mtwelve++;
        } else if (individuals._names['john doe']['person'+i] <= 16 && individuals._names['john doe']['person'+i] >= 12)   {
            msixteen++;
        }
            mcount++;
    }
    for (let i = 0; i <= individuals._names['jane doe'].length ; i++) {
        console.log('here');
        if (individuals._names['jane doe']['person'+i] <= 4) {
            ffour++;
        } else if (individuals._names['jane doe']['person'+i] <= 6 && individuals._names['jane doe']['person'+i] >= 4)  {
            fsix++;
        } else if (individuals._names['jane doe']['person'+i] <= 12 && individuals._names['jane doe']['person'+i] >= 6)   {
            ftwelve++;
        } else if (individuals._names['jane doe']['person'+i] <= 16 && individuals._names['jane doe']['person'+i] >= 12)   {
            fsixteen++;
        }
            fcount++;
    }
    $(document).ready(() => {
          let words = `${ffour} females killed and ${mfour} males killed within less than four weeks. ${fsix} females and ${msix} males killed within four to six
                  weeks. ${ftwelve} females killed and ${mtwelve} males killed within six to twelve weeks. ${ftwelve} females might survive longer and ${mtwelve} 
                  males might survive longer over a period of eighteen years.`
        wordsOne = `<p>Assuming the team of corrupt federal police officers constantly harrass individuals. Over a duration of eighteen years, a theorized team of corrupt federal police officers could manage to kill via harrassment ${ffour+mfour} people who last less than four weeks. ${msix+fsix} people who last between four and six weeks ${mtwelve+ftwelve } people who live between six and twelve weeks or three months which leaves ${msixteen+fsixteen} people alive whom live for a duration of no less than twelve to sixteen weeks of constant harrassment. If they survive this duratoin they may or may not live for much longer durations. All up ${mcount+fcount} were harrassed and ${(mfour + msix + mtwelve+ffour + fsix + ftwelve)} people were killed.</p>`;

       
        let list = ''
        for (let i = 0; i <= individuals._names['jane doe'].length ; i++) {
            
            list += `<p>jane doe ${i} survived for ${individuals._names['jane doe']['person'+i]} weeks.</p>`;
        }
        for (let i = 0; i <= individuals._names['john doe'].length ; i++) {
            
           list += `<p>john doe ${i} survived for ${individuals._names['john doe']['person'+i]} weeks.</p>`;
            
            console.log('here');
            
        }
        $harrassed = $('<div>').append($('<h1>').append((mcount+fcount)+'<br>HARRASSED PEOPLE!'));
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
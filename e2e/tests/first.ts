import { Selector } from 'testcafe';
import * as FileSaver from 'file-saver';

const proba = Selector('.tabStat').find('td')

fixture`Getting Started`
    .page`https://www.imot.bg/pcgi/imot.cgi?act=14`;

test('My first test', async t => {

    const articleHeader = await proba

    // Obtain the text of the article header
    let headerText = await articleHeader.innerText;
    console.log('headerText', headerText);


    let resultArr = []
    const table = Selector('.tabStat');
    const rowCount = await table.find('tr').count;
    const columnCount = await table.find('tr').nth(0).find('td').count;
    console.log('rowCount', rowCount);

    let timeStamp = await Selector('table').nth(3).find('td').textContent
    timeStamp = timeStamp.trim()
    console.log('timeStamp', timeStamp);
    

    for (let i = 2; i < rowCount; i++) {
        let obj = {}
        let district = await table.find('tr').nth(i).find('td').nth(0).textContent;
        let oneRoom = await table.find('tr').nth(i).find('td').nth(2).textContent;
        let twoRooms = await table.find('tr').nth(i).find('td').nth(5).textContent;
        let three = await table.find('tr').nth(i).find('td').nth(8).textContent;
        obj['district'] = district;
        obj["oneRoom"] = Number(oneRoom.trim().replace(' ', ''));
        obj["twoRooms"] = Number(twoRooms.trim().replace(' ', ''));
        obj["three"] = Number(three.trim().replace(' ', ''));
        resultArr.push(obj)
        if (district == 'м-т Киноцентъра') {
            console.log(' posledniq e ', i);
            resultArr.push({timeStamp})
            break;
        }
        // console.log('kvartal', kvartal);
        // console.log('ednostajni', ednostajni);
        // console.log('dvustajni', dvustajni);
        // console.log('tristajni', tristajni);

    }

    

    const fs = require('fs');

    fs.writeFile("../../src/assets/resultsData.json", JSON.stringify(resultArr), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    // console.log(resultArr);



});
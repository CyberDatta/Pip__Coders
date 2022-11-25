fs = require('fs');


const express = require('express')
const upload = require('express-fileupload');
const path = require('path');



class generator{
    constructor(bank_name){
        //pls don't fuck up


    this.source = JSON.parse(fs.readFileSync(__dirname + path.join('/public/uploads/1source.json')));
    // console.log(this.source);

    this.target = JSON.parse(fs.readFileSync(__dirname + path.join('/public/uploads/1target.json')));
    // console.log(this.target);


    const stringValue = fs.readFileSync(__dirname + path.join('/public/uploads/1mapping.csv'),
                {encoding:'utf8', flag:'r'});
    // function get_source_json() {
    //     var source_obj = JSON.parse(fs.readFileSync(__dirname+'/source.json'));
    //     console.log(source_obj);
    //   }
    //   //get_source_json()
    
    
    const formattedString = stringValue.trim().split('\n');
    // //console.log(formattedString[0])
    
    // //we dont need 1st row so index must start from 1
    this.mapping={}
    for (let i = 1; i < formattedString.length; i++) {
        const elements = formattedString[i].split(', ');
        //console.log(elements)
        const target = elements[1];
        const source = elements[2];
        const enumm = elements[3];
        const arr=[]
        arr.push(source);
        if(enumm!='-'){
            arr.push(enumm)
        }
        this.mapping[target]=arr;
    
      }
    //   console.log(this.mapping)
}
}






const app = express()
app.use(upload())
app.use(express.json())
app.use(express.static('public'))
app.all('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');

})


app.post('/',(req,res)=>{

    if(req.files){
        // console.log(req.files)
        var file=req.files.file
        var filename= file.name
        console.log(filename)
        file.mv('./Pip_Coders-main/static/bank_uploads' + filename,function(err){
            if(err){
                res.send(err)
            }else{
                res.send("Files uploaded successfully")
            }
        })
    }
    // upload 3 files and name
})


app.post('/forms',(req,res)=>{
    temp = new generator('1');
    var output = {

    };

    val=req.body


    const operators = {'>':1, '<':2, '==':3, '<=':4, '>=':5, "!=":6};
    function extractor(string_var,flag=-1,op2) {
        let string_var_plac = string_var;
        let formattedString = string_var_plac.split('.');
        value=val;
        // console.log(value)
        while (formattedString.length > 0) {
            if (formattedString[0] == '') {
                formattedString.shift();
            }
            if (formattedString[0] == 'item') {
                after_item=formattedString[1]
                for (let element of value) {
                    switch(flag) {
                        case 1:
     
                            if(element[after_item]>op2){
                                return element;
                            }
                        case 2:
                            if(element[after_item]<op2){
                                return element;
                            }
                            break;
                        
                        case 3:
                            // console.log(op2,element[after_item]);
                            if(element[after_item]=op2){
                                return element;
                            }
                            break;
                        case 4:
                            if(element[after_item]<=op2){
                                return element;
                            }
                            break;
                        case 5:
                            if(element[after_item]>=op2){
                                return element;
                            }
                            break;
                        case 6:
                            if(element[after_item]!=op2){
                                return element;
                            }
                            break;
                      }
                  }
                  return false;
            } else {
                value = value[formattedString[0]]
            }
            formattedString.shift();
        }
        return value;
    
    
    }
    function enum_extractor(formatted_enum_spec, enum_obj) {
        placeholder = extractor(formatted_enum_spec[1]);
        return enum_obj[placeholder];
    }
    
    function addition(string1, string2) {
        return extractor(string1) + extractor(string2);
    }
    
    Object.entries(temp.target).forEach(([key, value]) => {
        string_of_interest = temp.mapping[key];
        // console.log(string_of_interest);
        // console.log(key);
        if (string_of_interest.length > 1) {
            con
            var myobj = JSON.parse(string_of_interest[1]);
            if (string_of_interest[0].includes('+')) {
                string_of_interest[0] = string_of_interest[0].replace('(', '');
                string_of_interest[0] = string_of_interest[0].replace(')', '');
                formattedString = string_of_interest[0].split('+');
                // console.log(formattedString);
                for (i = 0; i < formattedString.length; i++) {
                    formattedString[i] = formattedString[i].trim();
                    formattedString[i] = formattedString[i].replaceAll(`"`, '');
                }
                collection = '';
                // console.log(formattedString);
                for (i = 0; i < formattedString.length; i++) {
                    // console.log(formattedString.length);
                    if (formattedString[i].includes('ENUM')) {
                        split_enum = formattedString[i].split(' ');
                        // console.log(formattedString.length); //test
                        // console.log(formattedString)  //test
                        collection = collection + enum_extractor(split_enum, myobj);
                        // console.log(formattedString)  //test
                        // console.log(formattedString.length); //test
                    }
                    else if (formattedString[i].includes('.')) {
                        collection = collection + extractor(formattedString[i]);
                    }
                    else {
                        collection = collection + formattedString[i];
                    }
                }


            }
    
    
    
            else {
                string_of_interest[0] = string_of_interest[0].replace('(', '');
                string_of_interest[0] = string_of_interest[0].replace(')', '');
                formattedString = string_of_interest[0].split(' ');
                output[key] = enum_extractor(formattedString, myobj);
    
            }
    
            // console.log(formattedString);
        }
        else if (string_of_interest.length === 1) {
            // console.log(string_of_interest);
            // console.log(key);
            string_of_interest[0] = string_of_interest[0].replace('(', '');
            string_of_interest[0] = string_of_interest[0].replace(')', '');
            formattedString = string_of_interest[0].split(' ');
    
            // console.log(formattedString);
            if (formattedString[0] == 'IF') {
                output[key]=extractor(formattedString[1],operators[formattedString[2]],formattedString[3]);
            }
            else if (formattedString.includes('+')) {
    
                output[key] = addition(formattedString[0], formattedString[2]);
            }
            else {
                output[key] = extractor(formattedString[0]);
            }
        }
    });
    res.json(output);

});

app.listen(5000)
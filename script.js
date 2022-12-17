// this func will be run when first btn is pressed, i.e. title and component number added
// using that info, it will add that many fields for component name, weightage and assessments
// to access weightages, use form.component1, and for assessments use form.assess1
// for comp name, names class 
var process = (form) => {

    compsNum = form.compsNum.value;
    weightage = document.getElementById('weightPart');

    for (let i = 0; i < compsNum; i++) {
        // weightage.appendChild(document.createElement("br"));
        var flexDiv = document.createElement('div');
        flexDiv.className = 'flexy';
        var v = document.createElement("label") 
        v.innerHTML =  `Name`;
        v.for = `name${i + 1}`;
        // flexDiv.appendChild(document.createElement("br"));
        flexDiv.appendChild(v);
        var x = document.createElement("input");
        x.type = 'text';
        x.name = `name${i + 1}`;
        x.className = 'names';
        // x.value = `component ${i + 1}`;
        x.placeholder = `component ${i + 1}`;
        x.required = true;
        flexDiv.appendChild(x);
        weightage.appendChild(flexDiv);
        
        flexDiv = document.createElement('div');
        flexDiv.className = 'flexy';
        var y = document.createElement("label") 
        y.innerHTML =  `Weightage`;
        y.for = `component${i + 1}`;
        // flexDiv.appendChild(document.createElement("br"));
        flexDiv.appendChild(y);
        var node = document.createElement("input");
        node.type = "number";
        node.min = 1
        node.max = 100
        node.name = `component${i + 1}`;
        node.id = `component${i + 1}`
        node.className = 'weightage';
        node.value = 1;
        flexDiv.appendChild(node);
        weightage.appendChild(flexDiv);

        var flexDiv = document.createElement('div');
        flexDiv.className = 'flexy';
        var y = document.createElement("label") 
        y.innerHTML =  `Assessments`;
        y.for = `assess${i + 1}`;
        // flexDiv.appendChild(document.createElement("br"));
        flexDiv.appendChild(y);
        var node = document.createElement("input");
        node.type = "number";
        node.min = 1
        node.max = 20
        node.name = `assess${i + 1}`;
        node.id = `assess${i + 1}`
        node.className = 'assessment';
        node.value = 1;
        flexDiv.appendChild(node);
        weightage.appendChild(flexDiv);
        
        weightage.appendChild(document.createElement("br"));
        console.log('bruh')
    }

    form.Sbutton.disabled = true;
    form.Vbutton.disabled = false;
    form.Vbutton.style.display = "block";
    // submitBtn.disabled = false;
    // submitBtn.style.display = "block";

    // <input class="btn" type="button" name="Vbutton"
    // value="Check Validity" onclick="weightcheck(this.form)">
    // <p class="msg"></p>
    // <input class="btn" type="button" 
    // name="Abutton" value="Add component marks" 
    // onclick="componentGen(this.form)">
    // p = document.createElement('p');
    // p.className = "msg";
    // weightage.appendChild(p)
    // wc = document.createElement('input');
    // wc.className = "btn";
    // wc.type = "button";
    // wc.name = "Vbutton";
    // wc.value = "Check Validity";
    // // wc.onClick = "weightcheck(this.form)";
    // wc.addEventListener('click', weightcheck(this.form))
    // // add event listener to wc
    // weightage.appendChild(wc)

}

var genComps = (form) => {
    form.Vbutton.disabled = true;
    count = form.compsNum.value;
    assessPart = document.getElementById('assessPart');
    names = document.getElementsByClassName('names');
    assessments = document.getElementsByClassName('assessment');

    for (let i = 0; i < count; i++) {
        // a p to display name of this component
        // a div to contain assesment num, obtained and total marks, and we'll style it with flex
        // par = document.createElement('h3');
        // par.innerHTML = names[i].value;
        // assessPart.appendChild(par);
        assessCount = parseInt(assessments[i].value);
        console.log(assessCount)
        for (let j = 0; j < assessCount; j++) {
            title = document.createElement('label');
            title.innerHTML = `${names[i].value} ${j+1}`;
            title.for = `obtain${i}`;
            obtain = document.createElement('input');
            obtain.type = 'number';
            obtain.name = `obtain${i}`;
            obtain.id = `obtain${i}`;
            obtain.value = 1;
            obtain.className = `${names[i].value}_obtain`;
            totals = document.createElement('input');
            totals.type = 'number';
            totals.name = `totals${i}`;
            totals.id = `totals${i}`;
            totals.value = 1;
            totals.className = `${names[i].value}_totals`;
            container = document.createElement('div');
            container.appendChild(title);
            container.appendChild(obtain);
            container.appendChild(totals);
            container.className = 'flexy';
            assessPart.appendChild(container);
            // assessPart.appendChild(document.createElement('br'));
        }
        assessPart.appendChild(document.createElement('br'));
    }
    form.Abutton.disabled = false;
    form.Abutton.style.display = "Block";
}

var weightcheck = (form) => {
    total = 0;
    elems = document.getElementsByClassName('weightage');
    for (let j = 0; j < elems.length; j++) {
        total += parseInt(elems[j].value)
    }

    msg = document.getElementsByClassName('msg')[0];
    console.log(total)
    if (total != 100) {
        msg.innerHTML = `The total weightage of all components should be 100%, not ${total}%, re adjust the weightage and try again`;
    }
    else {
        console.log('no')
        genComps(form)
    }

    // msg.innerHTML = 'bruh'
    // console.log('no')

}

var gradeGen = (grade) => {
    if (grade >= 95) {
        return ["A+", 4.00]
    }
    if (grade >= 90) {
        return ["A", 4.00]
    }
    if (grade >= 85) {
        return ["A-", 3.67]
    }
    if (grade >= 80) {
        return ["B+", 3.33]
    }
    if (grade >= 75) {
        return ["B", 3.00]
    }
    if (grade >= 70) {
        return ["B-", 2.67]
    }
    if (grade >= 67) {
        return ["C+", 2.33]
    }
    if (grade >= 63) {
        return ["C", 2.00]
    }
    if (grade >= 60) {
        return ["C-", 1.67]
    }
    if (grade < 60) {
        return ["F", 0.00]
    }
}

var assessCheck = (form) => {
    overall = 0;
    names = document.getElementsByClassName('names');
    weightages = document.getElementsByClassName('weightage');
    for (let i = 0; i < names.length; i++) {
        val = names[i].value;
        weight = parseFloat(weightages[i].value);
        obtained = document.getElementsByClassName(val + '_obtain');
        total = document.getElementsByClassName(val + '_totals');
        obtainTotal = 0;
        fullTotal = 0;
        for (let j = 0; j < obtained.length; j++) {
            obtainTotal += parseFloat(obtained[j].value);
            fullTotal += parseFloat(total[j].value);
        }
        // overall += ((obtainTotal/fullTotal) * (weight/100));
        overall += (obtainTotal/fullTotal) * weight;
    }
    grades = gradeGen(overall)
    letter = grades[0]
    gpa = grades[1]
    r = document.getElementById('results')
    results = document.createElement('div')
    title = document.createElement('p');
    title.innerHTML = form.title.value;
    title.className = "grade";
    results.appendChild(title);
    gradeElem1 = document.createElement('p')
    gradeElem1.innerHTML = `grade: ${letter}`;
    gradeElem1.className = 'grade';
    results.appendChild(gradeElem1)
    gradeElem2 = document.createElement('p')
    gradeElem2.innerHTML = `GPA: ${gpa}`;
    gradeElem2.className = 'grade';
    results.appendChild(gradeElem2)
    gradeElem3 = document.createElement('p')
    gradeElem3.innerHTML = `Percentage: ${overall.toFixed(2)}`;
    gradeElem3.className = 'grade';
    results.appendChild(gradeElem3)
    results.className = 'results';
    r.innerHTML = ''
    r.appendChild(results)
    console.log(overall, letter, gpa);
}
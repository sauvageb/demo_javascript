class Person {

    constructor(firstnameParam, lastname, age, job, children) {
        this.firstname = firstnameParam;
        this.lastname = lastname;
        this.job = job;
        this.age = age;
        this.children = children;
    }

    changeJob(newJob) {
        console.log(`${this.firstname} a changé de travail !`)
        console.log(`Il est passé de ${this.job} à ${newJob}`)
        this.job = newJob;
    }

    introduce() {
        console.log(`Hey ! Je suis ${this.firstname}, j'ai ${this.children.length} enfants`)
    }


}

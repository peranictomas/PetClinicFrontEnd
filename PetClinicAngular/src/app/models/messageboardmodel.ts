export class messageboardmodel {
    MessageID
    Question;
    Answer:any;
    Topic;
    
    
    constructor(question:string,answer:any,topic:string,id){
        this.Question = question;
        this.Answer = answer;
        this.Topic = topic;
        this.MessageID = id;
    }
    }
    
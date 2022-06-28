export class Todo{

    private static increment:number = 0;
    private _id:string = "";
    private _title:string = "";
    private _content:string = "";
    private _status:boolean = false;

    get id(){ return this._id }
    // set id(id){ this._id = id}
    get title(){ return this._title }
    set title(title){ this._title = title}
    get content(){ return this._content }
    set content(content){ this._content = content}
    get status(){ return this._status }
    set status(status){ this._status = status}

    
    constructor(title:string,content:string){
        this._id = Todo.increment+'';
        this._title = title;
        this._content = content;
        Todo.increment++;
    }

}
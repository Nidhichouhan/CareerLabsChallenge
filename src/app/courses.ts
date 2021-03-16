

export class Courses {
    Id: any;
    CourseName:  any;
    Provider: any;
    Universities: any;
    ParentSubject: any;
    ChildSubject: any;
    Url: any;
    NextSessionDate: any;
    Length: any;
    Video_Url: any;


    constructor(Id: any,CourseName: any, Provider: any, Universities: any,ParentSubject: any, ChildSubject: any, Url:any ,NextSessionDate: any, Length: any, Video_Url: any ){
        this.Id=Id;
        this.CourseName=CourseName;
        this.Provider=Provider;
        this.Universities=Universities;
        this.ParentSubject=ParentSubject;
        this.ChildSubject=ChildSubject;
        this.Url=Url;
        this.NextSessionDate=NextSessionDate;
        this.Length=Length;
        this.Video_Url=Video_Url;
    }
}

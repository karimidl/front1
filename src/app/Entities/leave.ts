import { LeaveType } from "./leavetype";

export interface Leave{

id: number;
date_debut :Date;
date_fin:Date;
duree_conje:number;
leaveType:LeaveType;



}

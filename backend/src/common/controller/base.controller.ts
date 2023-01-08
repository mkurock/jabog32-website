import { Controller, Get, Post, Render, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";


export class BaseController {
    constructor(){
    }

    setResponse(pageName:string, req:any, payload:any) {
        let msg = null;
        if(req.query.mode != null){
            msg = {
                text: req.query.msg,
                mode: req.query.mode
            }
        }
        return {
            page: {
                name: pageName
            },
            isAuthed: req?.isAuthenticated(),
            user: req.user,
            data: payload ,
            msg
        }
    }
}
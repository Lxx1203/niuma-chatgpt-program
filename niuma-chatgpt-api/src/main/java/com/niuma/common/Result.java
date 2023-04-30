package com.niuma.common;


import lombok.Data;

@Data
public class Result {
    private Integer code; // 0-failed 1-success
    private String msg; // error-msg
    private Object data;
    public static Result success(Object data){
        Result result = new Result();
        result.setData(data);
        result.setCode(1);
        return result;
    }
    public static Result fail(String msg,Object data){
        Result result = new Result();
        result.setMsg(msg);
        result.setData(data);
        result.setCode(0);
        return result;
    }

}

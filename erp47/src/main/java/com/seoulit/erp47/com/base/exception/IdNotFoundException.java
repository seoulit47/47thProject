package com.seoulit.erp47.com.base.exception;


/**
 * @Package  com.seoul.his.com.base.exception
 * @Class    IdNotFoundException.java
 * @Create   2016. 08. 26.
 * @Author   YonG
 * @Description 아이디찾을수없음 - Check Exception
 */

@SuppressWarnings("serial")
public class IdNotFoundException extends Exception {
    public IdNotFoundException(String msg) {
        super(msg);
    }
}

package com.seoulit.erp47.com.base.exception;

/**
 * @Package com.seoul.his.com.base.exception
 * @Class IdNotFoundException.java
 * @Create 2016. 08. 26.
 * @Author YonG
 * @Description 권한메뉴없음 - Check Exception
 */

@SuppressWarnings("serial")
public class AuthMenuNotFoundException extends Exception {

    public AuthMenuNotFoundException(String msg) {
        super(msg);
    }

}

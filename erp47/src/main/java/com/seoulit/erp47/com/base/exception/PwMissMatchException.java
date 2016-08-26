package com.seoulit.erp47.com.base.exception;

/**
 * @Package com.seoul.his.com.base.exception
 * @Class IdNotFoundException.java
 * @Create 2016. 08. 26.
 * @Author YonG 
 * @Description 패스워드틀림 - Check Exception
 */

@SuppressWarnings("serial")
public class PwMissMatchException extends Exception {

	public PwMissMatchException(String msg) {
		super(msg);
	}

}

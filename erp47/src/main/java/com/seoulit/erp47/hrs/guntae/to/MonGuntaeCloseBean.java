package com.seoulit.erp47.hrs.guntae.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.guntae.to
 * @Class    MonGuntaeBean.java
 * @Create   2016. 9. 19.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 *      
 */
@Dataset(name="dsMonGuntaeClose")
@Getter
@Setter
@ToString
public class MonGuntaeCloseBean extends BaseBean{

	private String
    		monGuntaeNo
    	  , belongYearMon
    	  , closeYn;
}

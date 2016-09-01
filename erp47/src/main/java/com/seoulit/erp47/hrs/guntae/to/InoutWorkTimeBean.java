package com.seoulit.erp47.hrs.guntae.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.guntae.to
 * @Class    InoutWorkTimeBean.java
 * @Create   2016. 8. 30.
 * @Author   PYH
 * @Description
 *
 * @LastUpdated
 *      
 */
@Dataset(name="dsInoutWorkTime")
@Getter
@Setter
@ToString
public class InoutWorkTimeBean extends BaseBean{

	private String
    		inOutTime
    	  , reason
    	  , inoutGubun
    	  , inoutTimeNo
    	  , startDate
    	  , endDate
    	  , empNo
    	  , empNm
    	  , overTime
    	  , belongDay;

}

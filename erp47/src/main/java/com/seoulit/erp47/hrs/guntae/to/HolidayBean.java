package com.seoulit.erp47.hrs.guntae.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.guntae.to
 * @Class    HolidayBean.java
 * @Create   2016. 9. 19.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 *      
 */
@Dataset(name="dsHoliday")
@Getter
@Setter
@ToString
public class HolidayBean extends BaseBean{

	private String
        	appType			//신청구분
          , guntaeGubun		//근태구분
          , startDate		//휴가신청 시작날짜
          , endDate			//휴가실천 마지막날짜
          , holidayStatus	//결재상태
          , holidayNo		//휴가신청번호
          , totalDays		//총일스
          , empNo			//사원번호
          , useDays			//사용일수
          , remainDays		//잔여일수
          , reqTotalDays	//휴가신청총일수
          , belongYear		//기준년도
          , errorCode
          , errorMsg;

}

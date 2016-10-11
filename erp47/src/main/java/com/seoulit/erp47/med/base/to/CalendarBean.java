package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;




/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CalendarBean.java
 * @Create   
 * @Author   김성호
 * @Description 의사 진료일정 적용할 일 빈
 *
 * @LastUpdated
 */	

@Getter
@Setter
@ToString
@Dataset(name="dsCalendar")
public class CalendarBean extends BaseBean{
	private String sun   ; //일
	private String mon   ; //월
	private String thu   ; //화
	private String wed   ; //수
	private String thurs ; //목
	private String fri   ; //금
	private String sat   ; //토

}

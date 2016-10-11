package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    ApplyHistoryBean.java
 * @Create   
 * @Author   김성호
 * @Description 의사 스케쥴 일 빈
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name="dsApplyHistory")
public class ApplyHistoryBean extends BaseBean{
	private String day; //일

}

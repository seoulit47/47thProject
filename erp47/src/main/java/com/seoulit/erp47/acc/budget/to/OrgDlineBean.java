package com.seoulit.erp47.acc.budget.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsOrgDline")
public class OrgDlineBean extends BaseBean{
	
	private	String 	accYear		      // 회계연도
					, dlineDiv	      // 마감구분
				  	, procDiv	      // 처리구분
				  	, procDay	      // 처리일자
				  	, reason	      // 사유
				  	, procPerson     // 처리자
					, errorCode
					, errorMsg;

}

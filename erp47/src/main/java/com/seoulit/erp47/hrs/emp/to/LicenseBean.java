package com.seoulit.erp47.hrs.emp.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    LicenseBean.java
 * @Create   2016. 9. 07.
 * @Author   김봉진
 * @Description
 *		자격정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmLicense")
public class LicenseBean extends BaseBean{

	 String licenseSeq   //면허시퀀스
				,empNo       //사원번호
				,acqDay      //최득일
				,licenseType //종별
				,licenseNo   //자격면허번호
				,issue;		 //발령청
	 
}

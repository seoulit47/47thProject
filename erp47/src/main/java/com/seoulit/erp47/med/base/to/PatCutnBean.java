









package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CntnInfoBean.java
 * @Create   2016. 10. 10
 * @Author   mickey
 * @Description 환자 주의사항 정보 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsPatCutn")
public class PatCutnBean extends BaseBean {
    private String patNo,//환자번호
    			patCautionNo,		//환자 주의사항 번호
    			cutnCategoryCd,//주의사항분류코드
    			cutnCategoryNm,//주의사항분류명
    			cautionCd,			//주의사항코드
    			cautionNm,			//주의사항명
    			abbr,				//약어
    			choiceYb;			//해당여부
}
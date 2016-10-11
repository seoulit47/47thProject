package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CntnArticleBean.java
 * @Create   2016. 10. 05.
 * @Author   
 * @Description 환자 주의사항 항목 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsCutnArticle")
public class CutnArticleBean extends BaseBean {
    private String cautionCd,	//항목코드
    			cautionNm,		//항목명
    			abbr,			//약어
    			inputDv,		//입력구분
    			cutnCategoryCd,//주의사항분류코드
    			cutnCategoryNm,//주의사항분류명
    			useYb;			//사용여부
}

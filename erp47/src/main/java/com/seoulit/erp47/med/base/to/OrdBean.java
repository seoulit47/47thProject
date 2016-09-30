package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CntnArticleBean.java
 * @Create   2016. 9. 30.
 * @Author   
 * @Description 환자 주의사항 항목 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsOrd")
public class OrdBean extends BaseBean {
    private String ordcd,	//항목코드
    			ordnm;		//항목명
}
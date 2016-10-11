package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CntnArticleBean.java
 * @Create   
 * @Author   김성호
 * @Description 환자 주의사항 항목 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsVirus")
public class VirusBean extends BaseBean {
    private String baccd,	//항목코드
    			bacnm;		//항목명
}
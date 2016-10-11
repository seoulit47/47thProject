package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CntnArticleBean.java
 * @Create   2016. 10. 03.
 * @Author   mickey
 * @Description 환자 주의사항 항목 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsSpeciesVirus")
public class SpeciesVirusBean extends BaseBean {
    private String bacgencd,	//항목코드
    			bacgennm;		//항목명
}
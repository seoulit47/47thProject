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
 * @Description 항균제 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsAntimicrobial")
public class AntimicrobialBean extends BaseBean {
    private String anticd,	//항목코드
    			antinm;		//항목명
}
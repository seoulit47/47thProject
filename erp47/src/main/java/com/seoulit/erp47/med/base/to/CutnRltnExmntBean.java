package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CntnRltnExmntBean.java
 * @Create   
 * @Author   김성호
 * @Description 환자 주의사항 관련검사 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsCutnRltnExmnt")
public class CutnRltnExmntBean extends BaseBean {
    private String
    			cutnCategoryCd,//주의사항분류코드
    			cutnCategoryNm,//주의사항분류명
    			cautionCd,			//항목코드
    			cautionNm,			//항목명
    			relationExmntCd,	//관련검사코드
    			ordnm,				//관련검사명
    			cheakResult,		//검사결과
    			speciesVirus,		//균속
    			bacgennm,			//균속명
    			virus,				//균
    			bacnm,				//균명
    			antimicrobial,		//항균제
    			antinm,				//항균제명
    			sensitivityResult,	//감수성결과
    			relationDisease,	//관련상병코드
    			codeNm,				//관련상병명
    			note,				//비고
    			relationExmntSeqNo; //관련검사시퀀스넘버 프라이머키 3	
}

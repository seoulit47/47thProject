package com.seoulit.erp47.log.inven.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsPstInven")
public class PstInvenBean extends BaseBean {

	String whCd; // 창고코드
	String gdsCd; // 물품코드
	String midGrpCd; // 중분류코드
	String smGrpCd; // 소분류코드
	String pstInvenQnt; // 현재재고량
	String bigGrpCd; // 대분류코드
	String ioCfmtCd; // 입출형태코드
	String ioTypeCd; // 입출유형코드
	String gdsNm; // 물품코드
	String unit; // 단위
	String useDept; // 입출형태코드

}

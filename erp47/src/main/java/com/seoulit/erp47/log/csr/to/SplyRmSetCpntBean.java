package com.seoulit.erp47.log.csr.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsSplyRmSetCpnt")
public class SplyRmSetCpntBean extends BaseBean {
	private String bigGrpCd // 대분류코드
			, disuseCau // 불용사유
			, disuseDate // 불용일자
			, midGrpCd // 중분류코드
			, mngntDeptCd // 관리부서코드
			, mngntDeptNm // 관리부서명
			, realuseYb // 실사용어부
			, setCd // SET코드
			, setNm // SET명
			, smGrpCd // 소분류코드
			, bigGrpNm // 대분류코드명
			, midGrpCdNm // 중분류코드명
			, smGrpCdNm; // 소분류코드명

	private List<SplyRmSetCpntHistBean> splyRmSetCpntHistList;

	@Remove
	public List<SplyRmSetCpntHistBean> getSplyRmSetCpntHistList() {
		return splyRmSetCpntHistList;
	}

	@Remove
	public void setSplyRmSetCpntHistList(List<SplyRmSetCpntHistBean> splyRmSetCpntHistList) {
		this.splyRmSetCpntHistList = splyRmSetCpntHistList;
	}

}

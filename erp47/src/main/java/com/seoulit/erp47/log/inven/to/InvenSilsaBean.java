package com.seoulit.erp47.log.inven.to;

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
@Dataset(name = "dsInvenSilsa")
public class InvenSilsaBean extends BaseBean {

	private String whCd; // 창고코드
	private String whNm; // 창고명
	private String invenRflt; // 재고반영
	private String ioCfmtCd; // 입출형태코드
	private String ioTypeCd; // 입출유형코드
	private String silsaDate; // 실사일자
	private String silsaNo; // 실사번호

	private List<InvenSilsaDtlInfoBean> InvenSilsaDtlInfoList;

	@Remove
	public List<InvenSilsaDtlInfoBean> getInvenSilsaDtlInfoList() {
		return InvenSilsaDtlInfoList;
	}

	@Remove
	public void setInvenSilsaDtlInfoList(List<InvenSilsaDtlInfoBean> invenSilsaDtlInfoList) {
		InvenSilsaDtlInfoList = invenSilsaDtlInfoList;
	}

}

package com.seoulit.erp47.won.outPatMgt.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.won.outPatMngnt.to
 * @Class CheckInfoBean.java
 * @Create 2016. 10. 11.
 * @Author kim
 * @Description
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsCheckPat")
public class CheckInfoBean extends BaseBean {

	private String patNo, // 환자등록번호
			checkPatSeq, // 체크환자등록번호
			postStartDate, // 게시시작일
			importance, // 중요도
			receiptYb, // 접수여부
			othersDelPossYb, // 타인삭제가능여부
			checkNtc, // 체크사항
			regDate, // 등록일
			finModDate, // 최종수정일
			regWorker, // 등록자
			finModWorker, // 최종수정자
			postEndDate; // 게시종료일

}

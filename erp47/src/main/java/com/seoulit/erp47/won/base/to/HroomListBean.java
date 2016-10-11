package com.seoulit.erp47.won.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.won.base.to
 * @Class HroomListBean.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHroomList")
public class HroomListBean extends BaseBean {

	private String hroomNo, // 병실번호
			ward, // 병동
			hroom, // 병실
			hosptlzPlnDate, // 입원예정일
			hosptlzFinalDate, // 퇴원예정일
			trmtDeptCd, // 진료과코드
			hroomGrade, // 병실등급
			patNo, // 환자등록번호
			gender, // 성별
			sibdCnt, // 병상개수
			pmsnSibd, // 허가병상
			finanCnt; // 재원자수

}

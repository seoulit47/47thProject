package com.seoulit.erp47.won.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.won.base.to
 * @Class JwjBean.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsJwj")
public class JwjBean extends BaseBean {
	private String patNm, // 환자명
			rrn1, // 주민번호
			gender, // 성별
			age, // 나이
			hosptlzDate, // 입원일시
			jwDate, // 재원일
			trmtDept, // 진료과
			trmtDoct, // 담당의
			ward, // 병동
			hroom, // 병실
			addr, // 주소
			patNo, // 환자등록번호
			dscgDate; // 퇴원일자
}

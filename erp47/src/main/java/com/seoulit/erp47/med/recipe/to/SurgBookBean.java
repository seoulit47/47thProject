package com.seoulit.erp47.med.recipe.to;

import org.apache.ibatis.type.Alias;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.med.recipe.to
 * @Class    MpSurgBookBean.java
 * @Create   2016. 10. 13.
 * @Author   mickim
 * @Description 수술예약 빈
 *
 * @LastUpdated
 */


@Setter
@Getter
@ToString
@Dataset(name = "dsMpSurgBook")
public class SurgBookBean extends BaseBean{
	String surgNo;             //수술번호
	String patNo;              //환자등록번호
	String patNm;              //환자성명
	String patType;            //환자종류
	String surgType;           //수술구분
	String bookDate;           //예약일
	String surgHour;           //수술시간
	String beforeSurgDiagn1;   //수술전 진단명1
	String beforeSurgDiagn2;   //수술전 진단명2
	String mainSurgNm;         //수술명
	String subSurgNm;          //부수술명
	String ansthsType;         //마취종류
	String surgDoc1;           //수술의1
	String surgDoc2;           //수술의2
	String surgDoc3;           //수술의3
	String surgBodyPosi;       //수술체위
	String surgPrep;           //수술준비사항
	String remark;             //적요
	String surgRoomNo;         //수수실번호
	String apprvYn;            //수술여부
	String bookTime;           //예약시간
}
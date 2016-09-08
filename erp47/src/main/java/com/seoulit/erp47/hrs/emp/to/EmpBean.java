package com.seoulit.erp47.hrs.emp.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    EmpBean.java
 * @Create   2016. 08. 26.
 * @Author   YonG
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "gdsEmp")
public class EmpBean extends BaseBean {

	List<CareerBean> careerList;			//경력리스트
	List<DisabilityBean> disabilityList;	//장애리스트
	List<EducaBean> educationBeanList;		//교육리스트
	List<FamilyBean> familyList;			//가족리스트
	List<LicenseBean> licenseList;			//자격리스트
	List<MilitaryBean> militaryList;		//병역리스트
	List<PerconaldateBean> perconaldateList;//인적사항리스트
	
	@Remove
	public List<CareerBean> getCareerList() {
		return careerList;
	}
	@Remove
	public void setCareerList(List<CareerBean> careerList) {
		this.careerList = careerList;
	}
	@Remove
	public List<DisabilityBean> getDisabilityList() {
		return disabilityList;
	}
	@Remove
	public void setDisabilityList(List<DisabilityBean> disabilityList) {
		this.disabilityList = disabilityList;
	}
	@Remove
	public List<EducaBean> getEducationBeanList() {
		return educationBeanList;
	}
	@Remove
	public void setEducationBeanList(List<EducaBean> educationBeanList) {
		this.educationBeanList = educationBeanList;
	}
	@Remove
	public List<FamilyBean> getFamilyList() {
		return familyList;
	}
	@Remove
	public void setFamilyList(List<FamilyBean> familyList) {
		this.familyList = familyList;
	}
	@Remove
	public List<LicenseBean> getLicenseList() {
		return licenseList;
	}
	@Remove
	public void setLicenseList(List<LicenseBean> licenseList) {
		this.licenseList = licenseList;
	}
	@Remove
	public List<MilitaryBean> getMilitaryList() {
		return militaryList;
	}
	@Remove
	public void setMilitaryList(List<MilitaryBean> militaryList) {
		this.militaryList = militaryList;
	}
	@Remove
	public List<PerconaldateBean> getPerconaldateList() {
		return perconaldateList;
	}
	@Remove
	public void setPerconaldateList(List<PerconaldateBean> perconaldateList) {
		this.perconaldateList = perconaldateList;
	}
	
	String frignSingleTxrate, //외국인단일세율
		   empNo,             //사원번호
		   empNm,			  //사원명
		   jobtt,			  //직위
		   jobcl,			  //직종
		   jobrk,		      //직급
		   rrn,				  //주민등록번호
		   birthday,		  //생년월일
		   gender,			  //성별
		   mateYn,			  //배우자유무
		   addr,			  //주소
		   zipCd,			  //우편번호
		   permaddr,		  //기준등록지
		   tel,				  //전화번호
		   phone,			  //휴대폰번호
		   extsn,			  //원내전화번호
		   fax,				  //팩스번호
		   password,		  //비밀번호
		   image,		      //이미지파일명
		   natnt,			  //국적
		   localYn,			  //내외국인여부
		   forinNum,		  //외국인등록번호
		   deptCd,		      //부서코드
		   hireDiv,		      //고용구분
		   workStatus,		  //재직상태
		   workPeriod,	      //근속년수
		   retDate,	          //퇴사일
		   retMonthWorkingdays,//퇴직예정일
		   payStep,		      //호봉
		   pms,				  //권한
		   hireDate,		  //입사일
		   detailAddr,		  //상세주소
		   email,			  //이메일주소
		   deptNm,			  //부서명
		   bankNm,		      //은행명
		   accountNm,		  //계좌번호
		   payDate,           //급여일
		   sts,				  //상태
		   loginIp,           //최종접속ip
		   loginTime;         //최종접속시간
	
}
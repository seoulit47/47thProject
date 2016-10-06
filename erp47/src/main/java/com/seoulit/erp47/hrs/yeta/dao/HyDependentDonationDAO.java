package com.seoulit.erp47.hrs.yeta.dao;

import java.util.List;

import com.seoulit.erp47.hrs.yeta.to.HyDependentDonationBean;

public interface HyDependentDonationDAO {
	List<HyDependentDonationBean> selectHyDependentDonationList();

	void insertHyDependentDonation(HyDependentDonationBean hyDependentDonationBean);

	void updateHyDependentDonation(HyDependentDonationBean hyDependentDonationBean);

	void deleteHyDependentDonation(HyDependentDonationBean hyDependentDonationBean);

}

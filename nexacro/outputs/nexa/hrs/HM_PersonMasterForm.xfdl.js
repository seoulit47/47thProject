﻿(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("HM_PersonMasterForm");
                this.set_classname("HM_PersonMasterForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,770);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDisabilityDivType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"divType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"divType\">등록장애인</Col></Row><Row><Col id=\"divType\">국가유공장애인</Col></Row><Row><Col id=\"divType\">산업재해장애인</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisabilityType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"physiqueGradeType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"physiqueGradeType\">장애유형무관</Col></Row><Row><Col id=\"physiqueGradeType\">지체장애</Col></Row><Row><Col id=\"physiqueGradeType\">뇌병변</Col></Row><Row><Col id=\"physiqueGradeType\">시각장애</Col></Row><Row><Col id=\"physiqueGradeType\">청각장애</Col></Row><Row><Col id=\"physiqueGradeType\">언어장애</Col></Row><Row><Col id=\"physiqueGradeType\">정신지체</Col></Row><Row><Col id=\"physiqueGradeType\">정신장애</Col></Row><Row><Col id=\"physiqueGradeType\">발달장애</Col></Row><Row><Col id=\"physiqueGradeType\">신장장애</Col></Row><Row><Col id=\"physiqueGradeType\">심장장애</Col></Row><Row><Col id=\"physiqueGradeType\">안면변형장애</Col></Row><Row><Col id=\"physiqueGradeType\">호흡기장애</Col></Row><Row><Col id=\"physiqueGradeType\">간장애</Col></Row><Row><Col id=\"physiqueGradeType\">장루/요루장애</Col></Row><Row><Col id=\"physiqueGradeType\">간질장애</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMgroupType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"mgType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"mgType\">육군</Col></Row><Row><Col id=\"mgType\">해군</Col></Row><Row><Col id=\"mgType\">공군</Col></Row><Row><Col id=\"mgType\">해병</Col></Row><Row><Col id=\"mgType\">전투경찰</Col></Row><Row><Col id=\"mgType\">의무경찰</Col></Row><Row><Col id=\"mgType\">기타</Col></Row><Row><Col id=\"mgType\">카츄사</Col></Row><Row><Col id=\"mgType\">공익근무요원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBranchType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"branchType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"branchType\">보병</Col></Row><Row><Col id=\"branchType\">포병</Col></Row><Row><Col id=\"branchType\">기갑</Col></Row><Row><Col id=\"branchType\">공병</Col></Row><Row><Col id=\"branchType\">통신</Col></Row><Row><Col id=\"branchType\">병참</Col></Row><Row><Col id=\"branchType\">수송</Col></Row><Row><Col id=\"branchType\">화학</Col></Row><Row><Col id=\"branchType\">특전화기</Col></Row><Row><Col id=\"branchType\">행정</Col></Row><Row><Col id=\"branchType\">헌병</Col></Row><Row><Col id=\"branchType\">군의</Col></Row><Row><Col id=\"branchType\">의무</Col></Row><Row><Col id=\"branchType\">의정</Col></Row><Row><Col id=\"branchType\">군종</Col></Row><Row><Col id=\"branchType\">법무</Col></Row><Row><Col id=\"branchType\">군악</Col></Row><Row><Col id=\"branchType\">간호</Col></Row><Row><Col id=\"branchType\">전투</Col></Row><Row><Col id=\"branchType\">기관</Col></Row><Row><Col id=\"branchType\">기술</Col></Row><Row><Col id=\"branchType\">일반</Col></Row><Row><Col id=\"branchType\">보급</Col></Row><Row><Col id=\"branchType\">조종</Col></Row><Row><Col id=\"branchType\">정비</Col></Row><Row><Col id=\"branchType\">취사</Col></Row><Row><Col id=\"branchType\">암호</Col></Row><Row><Col id=\"branchType\">전산</Col></Row><Row><Col id=\"branchType\">여군</Col></Row><Row><Col id=\"branchType\">항해</Col></Row><Row><Col id=\"branchType\">경비</Col></Row><Row><Col id=\"branchType\">보안</Col></Row><Row><Col id=\"branchType\">정보</Col></Row><Row><Col id=\"branchType\">소총</Col></Row><Row><Col id=\"branchType\">갑판</Col></Row><Row><Col id=\"branchType\">화기</Col></Row><Row><Col id=\"branchType\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHierarachyType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"hierarachyType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hierarachyType\">대장</Col></Row><Row><Col id=\"hierarachyType\">중장</Col></Row><Row><Col id=\"hierarachyType\">소장</Col></Row><Row><Col id=\"hierarachyType\">준장</Col></Row><Row><Col id=\"hierarachyType\">대령</Col></Row><Row><Col id=\"hierarachyType\">중령</Col></Row><Row><Col id=\"hierarachyType\">소령</Col></Row><Row><Col id=\"hierarachyType\">대위</Col></Row><Row><Col id=\"hierarachyType\">중위</Col></Row><Row><Col id=\"hierarachyType\">소위</Col></Row><Row><Col id=\"hierarachyType\">준위</Col></Row><Row><Col id=\"hierarachyType\">원사</Col></Row><Row><Col id=\"hierarachyType\">상사</Col></Row><Row><Col id=\"hierarachyType\">중사</Col></Row><Row><Col id=\"hierarachyType\">하사</Col></Row><Row><Col id=\"hierarachyType\">병장</Col></Row><Row><Col id=\"hierarachyType\">상병</Col></Row><Row><Col id=\"hierarachyType\">일병</Col></Row><Row><Col id=\"hierarachyType\">이병</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPhysiqueGradeType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"physiqueGradeType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"physiqueGradeType\">1급</Col></Row><Row><Col id=\"physiqueGradeType\">2급</Col></Row><Row><Col id=\"physiqueGradeType\">3급</Col></Row><Row><Col id=\"physiqueGradeType\">4급</Col></Row><Row><Col id=\"physiqueGradeType\">5급</Col></Row><Row><Col id=\"physiqueGradeType\">6급</Col></Row><Row><Col id=\"physiqueGradeType\">7급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJobttType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"physiqueGradeType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"physiqueGradeType\">동남권원자력의학원장</Col></Row><Row><Col id=\"physiqueGradeType\">원장</Col></Row><Row><Col id=\"physiqueGradeType\">원장 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">주임과장</Col></Row><Row><Col id=\"physiqueGradeType\">실장</Col></Row><Row><Col id=\"physiqueGradeType\">센터장</Col></Row><Row><Col id=\"physiqueGradeType\">병원장</Col></Row><Row><Col id=\"physiqueGradeType\">병원장 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">연구센터장</Col></Row><Row><Col id=\"physiqueGradeType\">연구센터장 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">부장</Col></Row><Row><Col id=\"physiqueGradeType\">부장대우</Col></Row><Row><Col id=\"physiqueGradeType\">부장 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">실장(부장급)</Col></Row><Row><Col id=\"physiqueGradeType\">실장(부장급)대우</Col></Row><Row><Col id=\"physiqueGradeType\">실장(부장급) 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">센터장(부장급)</Col></Row><Row><Col id=\"physiqueGradeType\">센터장(부장급)대우</Col></Row><Row><Col id=\"physiqueGradeType\">센터장(부장급) 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">팀장</Col></Row><Row><Col id=\"physiqueGradeType\">팀장대우</Col></Row><Row><Col id=\"physiqueGradeType\">팀장 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">과장</Col></Row><Row><Col id=\"physiqueGradeType\">과장대우</Col></Row><Row><Col id=\"physiqueGradeType\">과장 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">실장(팀장급)</Col></Row><Row><Col id=\"physiqueGradeType\">실장(팀장급)대우</Col></Row><Row><Col id=\"physiqueGradeType\">실장(팀장급) 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">센터장(팀장급)</Col></Row><Row><Col id=\"physiqueGradeType\">센터장(팀장급)대우</Col></Row><Row><Col id=\"physiqueGradeType\">센터장(팀장급) 직무대행</Col></Row><Row><Col id=\"physiqueGradeType\">수간호사</Col></Row><Row><Col id=\"physiqueGradeType\">정책위원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFamiliyType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"familyType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"familyType\">본인</Col></Row><Row><Col id=\"familyType\">부</Col></Row><Row><Col id=\"familyType\">손자녀</Col></Row><Row><Col id=\"familyType\">사촌이내</Col></Row><Row><Col id=\"familyType\">자부</Col></Row><Row><Col id=\"familyType\">자녀(셋째이상)</Col></Row><Row><Col id=\"familyType\">모</Col></Row><Row><Col id=\"familyType\">배우자</Col></Row><Row><Col id=\"familyType\">자녀</Col></Row><Row><Col id=\"familyType\">배우자(부)</Col></Row><Row><Col id=\"familyType\">배우자(모)</Col></Row><Row><Col id=\"familyType\">형제자매</Col></Row><Row><Col id=\"familyType\">조부</Col></Row><Row><Col id=\"familyType\">조모</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDegreeType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"degreeType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"degreeType\">학사</Col></Row><Row><Col id=\"degreeType\">석사</Col></Row><Row><Col id=\"degreeType\">박사</Col></Row><Row><Col id=\"degreeType\">전문학사</Col></Row><Row><Col id=\"degreeType\">석사수료</Col></Row><Row><Col id=\"degreeType\">박사수료</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLicenseType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"licenseType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"licenseType\">간호사면허</Col></Row><Row><Col id=\"licenseType\">간호조무사 자격</Col></Row><Row><Col id=\"licenseType\">건축배관기능사 2급</Col></Row><Row><Col id=\"licenseType\">고압가스냉동기능사 2급</Col></Row><Row><Col id=\"licenseType\">고압가스취급기능사 2급</Col></Row><Row><Col id=\"licenseType\">고압가스화학기능사 2급</Col></Row><Row><Col id=\"licenseType\">교원자격증</Col></Row><Row><Col id=\"licenseType\">교환원면허</Col></Row><Row><Col id=\"licenseType\">국가기술 열처리기능사 2급</Col></Row><Row><Col id=\"licenseType\">국문타자3급</Col></Row><Row><Col id=\"licenseType\">물리치료사</Col></Row><Row><Col id=\"licenseType\">방사선사면허</Col></Row><Row><Col id=\"licenseType\">방화관리자</Col></Row><Row><Col id=\"licenseType\">사회복지사 자격증 1급</Col></Row><Row><Col id=\"licenseType\">선반기능사 2급</Col></Row><Row><Col id=\"licenseType\">소방설비기사 1급(전기분야)</Col></Row><Row><Col id=\"licenseType\">수의사면허</Col></Row><Row><Col id=\"licenseType\">약사면허</Col></Row><Row><Col id=\"licenseType\">양호교사 자격증</Col></Row><Row><Col id=\"licenseType\">영양사 자격증</Col></Row><Row><Col id=\"licenseType\">운전면허(대형)</Col></Row><Row><Col id=\"licenseType\">운전면허(1종보통)</Col></Row><Row><Col id=\"licenseType\">운전면허2종 보통</Col></Row><Row><Col id=\"licenseType\">의사면허</Col></Row><Row><Col id=\"licenseType\">임상병리사면허</Col></Row><Row><Col id=\"licenseType\">치과위생사면허</Col></Row><Row><Col id=\"licenseType\">정보처리기사2</Col></Row><Row><Col id=\"licenseType\">워드프로세서</Col></Row><Row><Col id=\"licenseType\">응급구조사</Col></Row><Row><Col id=\"licenseType\">재활치료학</Col></Row><Row><Col id=\"licenseType\">세포병리사</Col></Row><Row><Col id=\"licenseType\">RI 일반면허</Col></Row><Row><Col id=\"licenseType\">특수급무선통신사</Col></Row><Row><Col id=\"licenseType\">스포츠마사지사</Col></Row><Row><Col id=\"licenseType\">정보처리산업기사</Col></Row><Row><Col id=\"licenseType\">세무회계관리사</Col></Row><Row><Col id=\"licenseType\">산업안전산업기사</Col></Row><Row><Col id=\"licenseType\">보험심사간호사(민간자격)</Col></Row><Row><Col id=\"licenseType\">한자능력검정</Col></Row><Row><Col id=\"licenseType\">증권투자상담사</Col></Row><Row><Col id=\"licenseType\">컴퓨터활용능력2급</Col></Row><Row><Col id=\"licenseType\">TEPS(영어능력검정)2급</Col></Row><Row><Col id=\"licenseType\">일본어능력시험(JLPT) 3급</Col></Row><Row><Col id=\"licenseType\">컴퓨터활용능력1급</Col></Row><Row><Col id=\"licenseType\">사무자동화 산업기사</Col></Row><Row><Col id=\"licenseType\">소방설비기사(기계분야)</Col></Row><Row><Col id=\"licenseType\">워드프로세서 1급</Col></Row><Row><Col id=\"licenseType\">워드프로세서 2급</Col></Row><Row><Col id=\"licenseType\">보육교사1급</Col></Row><Row><Col id=\"licenseType\">사회복지사 자격증 2급</Col></Row><Row><Col id=\"licenseType\">전산회계 2급</Col></Row><Row><Col id=\"licenseType\">전산회계 1급</Col></Row><Row><Col id=\"licenseType\">유통관리사 2급</Col></Row><Row><Col id=\"licenseType\">CISA</Col></Row><Row><Col id=\"licenseType\">OCP</Col></Row><Row><Col id=\"licenseType\">한식조리사</Col></Row><Row><Col id=\"licenseType\">전문간호사자격증</Col></Row><Row><Col id=\"licenseType\">정보처리기능사</Col></Row><Row><Col id=\"licenseType\">의공산업기사</Col></Row><Row><Col id=\"licenseType\">의공기사</Col></Row><Row><Col id=\"licenseType\">전기기사 1급</Col></Row><Row><Col id=\"licenseType\">소화기내시경전문의</Col></Row><Row><Col id=\"licenseType\">요양보호사자격증</Col></Row><Row><Col id=\"licenseType\">응급처치강사자격증</Col></Row><Row><Col id=\"licenseType\">심폐소생술자격증</Col></Row><Row><Col id=\"licenseType\">Offce 2007master</Col></Row><Row><Col id=\"licenseType\">위생사</Col></Row><Row><Col id=\"licenseType\">CT전문방사선사</Col></Row><Row><Col id=\"licenseType\">전기산업기사</Col></Row><Row><Col id=\"licenseType\">TESOL</Col></Row><Row><Col id=\"licenseType\">마이크로소프트공인전문가</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmPerconaldate", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"height\" type=\"STRING\" size=\"256\"/><Column id=\"weight\" type=\"STRING\" size=\"256\"/><Column id=\"eyeseght\" type=\"STRING\" size=\"256\"/><Column id=\"colorblind\" type=\"STRING\" size=\"256\"/><Column id=\"bloodType\" type=\"STRING\" size=\"256\"/><Column id=\"medicalHistory\" type=\"STRING\" size=\"256\"/><Column id=\"religion\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"hobby\" type=\"STRING\" size=\"256\"/><Column id=\"talent\" type=\"STRING\" size=\"256\"/><Column id=\"realestate\" type=\"STRING\" size=\"256\"/><Column id=\"lifeLevel\" type=\"STRING\" size=\"256\"/><Column id=\"living\" type=\"STRING\" size=\"256\"/><Column id=\"citizenship\" type=\"STRING\" size=\"256\"/><Column id=\"perresi\" type=\"STRING\" size=\"256\"/><Column id=\"ctyName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"height\">1</Col><Col id=\"weight\">2</Col><Col id=\"eyeseght\">3</Col><Col id=\"colorblind\">5</Col><Col id=\"bloodType\">6</Col><Col id=\"medicalHistory\">4</Col><Col id=\"religion\">7</Col><Col id=\"empNo\">16001</Col><Col id=\"hobby\">8</Col><Col id=\"talent\">9</Col><Col id=\"realestate\">0</Col><Col id=\"lifeLevel\">11</Col><Col id=\"living\">12</Col><Col id=\"citizenship\">13</Col><Col id=\"perresi\">14</Col><Col id=\"ctyName\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmMilitary", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"physiqueGrade\" type=\"STRING\" size=\"256\"/><Column id=\"mgroup\" type=\"STRING\" size=\"256\"/><Column id=\"branch\" type=\"STRING\" size=\"256\"/><Column id=\"hierarachy\" type=\"STRING\" size=\"256\"/><Column id=\"msn\" type=\"STRING\" size=\"256\"/><Column id=\"joinArmyDay\" type=\"STRING\" size=\"256\"/><Column id=\"dischargeDay\" type=\"STRING\" size=\"256\"/><Column id=\"militarySeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"empNo\">16001</Col><Col id=\"physiqueGrade\">1</Col><Col id=\"mgroup\">2</Col><Col id=\"branch\">3</Col><Col id=\"hierarachy\">4</Col><Col id=\"msn\">5</Col><Col id=\"joinArmyDay\">6</Col><Col id=\"dischargeDay\">7</Col><Col id=\"militarySeq\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmDisability", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"disabilityApvDay\" type=\"STRING\" size=\"256\"/><Column id=\"disabilityApvDiv\" type=\"STRING\" size=\"256\"/><Column id=\"disabilityType\" type=\"STRING\" size=\"256\"/><Column id=\"disabilityGrade\" type=\"STRING\" size=\"256\"/><Column id=\"intensiveYn\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"disabilitySeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"empNo\">16001</Col><Col id=\"disabilityApvDay\">1</Col><Col id=\"disabilityApvDiv\">2</Col><Col id=\"disabilityType\">3</Col><Col id=\"disabilityGrade\">4</Col><Col id=\"intensiveYn\">5</Col><Col id=\"note\">6</Col><Col id=\"disabilitySeq\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new VirtualFile("fileImg", this);
            this.addChild(obj.name, obj);
            obj = new Dataset("dsHmFamily", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"famSeq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"relt\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"spptYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"empNo\">16001</Col><Col id=\"famSeq\">1</Col><Col id=\"name\">2</Col><Col id=\"relt\">3</Col><Col id=\"rrn\">4</Col><Col id=\"spptYn\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmCareer", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"careerSeq\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"joinDay\" type=\"STRING\" size=\"256\"/><Column id=\"retireDay\" type=\"STRING\" size=\"256\"/><Column id=\"workplace\" type=\"STRING\" size=\"256\"/><Column id=\"position\" type=\"STRING\" size=\"256\"/><Column id=\"respTask\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"empNo\">16001</Col><Col id=\"careerSeq\">1</Col><Col id=\"joinDay\">2</Col><Col id=\"retireDay\">3</Col><Col id=\"workplace\">4</Col><Col id=\"position\">5</Col><Col id=\"respTask\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEducation", this);
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"admDay\" type=\"STRING\" size=\"256\"/><Column id=\"graduDay\" type=\"STRING\" size=\"256\"/><Column id=\"schoolName\" type=\"STRING\" size=\"256\"/><Column id=\"major\" type=\"STRING\" size=\"256\"/><Column id=\"degree\" type=\"STRING\" size=\"256\"/><Column id=\"educationSeq\" type=\"STRING\" size=\"256\"/><Column id=\"finYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"empNo\">16001</Col><Col id=\"admDay\">1</Col><Col id=\"graduDay\">2</Col><Col id=\"schoolName\">3</Col><Col id=\"major\">4</Col><Col id=\"degree\">5</Col><Col id=\"educationSeq\">6</Col><Col id=\"finYn\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">empImage</Col><Col id=\"URL\">his::hrs/emp/registerEmpImage.do</Col><Col id=\"inData\">dsImage=dsImage:U</Col><Col id=\"outData\">dsImage=dsImage</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">searchEmp</Col><Col id=\"URL\">his::hrs/emp/selectEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmEmp=gdsEmp dsHmFamily=dsHmFamily dsHmEducation=dsHmEducation dsHmCareer=dsHmCareer dsHmLicense=dsHmLicense dsHmPerconaldate=dsHmPerconaldate dsHmDisability=dsHmDisability dsHmMilitary=dsHmMilitary</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">mngntEmp</Col><Col id=\"URL\">his::hrs/emp/mngntEmp.do</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"inData\">gdsEmp=dsHmEmp:U dsHmFamily=dsHmFamily:U dsHmEducation=dsHmEducation:U dsHmCareer=dsHmCareer:U dsHmLicense=dsHmLicense:U dsHmPerconaldate=dsHmPerconaldate:U dsHmDisability=dsHmDisability:U dsHmMilitary=dsHmMilitary:U </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new FileDialog("fileDialog", this);
            obj.set_filter("All(*.*)|*.*|");
            obj.set_filterindex("0");
            obj.set_defaultextension("true");
            this.addChild(obj.name, obj);
            obj = new Dataset("dsHmLicense", this);
            obj._setContents("<ColumnInfo><Column id=\"licenseSeq\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"acqDay\" type=\"STRING\" size=\"256\"/><Column id=\"licenseType\" type=\"STRING\" size=\"256\"/><Column id=\"licenseNo\" type=\"STRING\" size=\"256\"/><Column id=\"issue\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"licenseSeq\">0001</Col><Col id=\"empNo\">16001</Col><Col id=\"acqDay\">20060101</Col><Col id=\"licenseNo\">01-232626-02</Col><Col id=\"issue\">자동차판매소</Col><Col id=\"licenseType\">운전면허</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"zipCd\">660-100</Col><Col id=\"tel\">0557547545</Col><Col id=\"phone\">01012341234</Col><Col id=\"password\">1</Col><Col id=\"image\">160012.jpg</Col><Col id=\"hireDiv\">정규직</Col><Col id=\"gender\">M</Col><Col id=\"hireDate\">20060101</Col><Col id=\"fax\">0551231234</Col><Col id=\"empNo\">16001</Col><Col id=\"birthday\">19820101</Col><Col id=\"addr\">1234</Col><Col id=\"detailAddr\">5678</Col><Col id=\"email\">1234</Col><Col id=\"deptNm\">내과</Col><Col id=\"bankNm\">1</Col><Col id=\"empNm\">김재</Col><Col id=\"workStatus\">재직</Col><Col id=\"rrn\">4300001234567</Col><Col id=\"retMonthWorkingdays\">20190101</Col><Col id=\"retDate\">20160120</Col><Col id=\"deptCd\">10100</Col><Col id=\"forinNum\">111111</Col><Col id=\"extsn\">7001001231</Col><Col id=\"natnt\">중국</Col><Col id=\"payStep\">8</Col><Col id=\"workPeriod\">10</Col><Col id=\"permaddr\">산청 어딘가</Col><Col id=\"localYn\">1</Col><Col id=\"jobrk\">의사</Col><Col id=\"jobcl\">의무직</Col><Col id=\"jobtt\">병원장</Col><Col id=\"accountNm\">805-12-214984</Col><Col id=\"mateYn\">1</Col><Col id=\"pms\">admin</Col><Col id=\"frignSingleTxrate\">1</Col><Col id=\"sts\">insert</Col><Col id=\"lunar\">1</Col><Col id=\"payDate\">2</Col></Row><Row><Col id=\"empNm\">만재</Col><Col id=\"empNo\">16002</Col><Col id=\"sts\">insert</Col><Col id=\"payDate\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsImage", this);
            obj._setContents("<ColumnInfo><Column id=\"imgNm\" type=\"STRING\" size=\"256\"/><Column id=\"imgBinary\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "17.87%", "67", "830", "425", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);
            obj = new Button("Button_EXL", "absolute", "90.49%", "11", null, "30", "3.59%", null, this.Div02);
            obj.set_taborder("76");
            obj.set_text("EXL");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "50.36%", "227", null, "30", "42.63%", null, this.Div02);
            obj.getSetter("taborder").set("77");
            obj.set_text("원내전화");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "1.09%", "294", null, "30", "90.22%", null, this.Div02);
            obj.getSetter("taborder").set("79");
            obj.set_text("imgName");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.Div02.addChild(obj.name, obj);
            obj = new Spin("workperiodSpin", "absolute", "57.73%", "34", null, "29", "33.33%", null, this.Div02);
            obj.set_taborder("80");
            obj.set_value("1");
            obj.set_displaynulltext("1");
            obj.set_cssclass("AreaSpin");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "18.07%", "494", null, "227", "1.07%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0.68%", "725", null, "38", "1.07%", null, this);
            obj.set_taborder("4");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imageViewer", "absolute", "18.55%", "73", "181", "288", null, null, this);
            obj.set_taborder("5");
            obj.set_stretch("fit");
            obj.set_cssclass("AreaImg");
            obj.style.set_border("1 solid cadetblue");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "36.62%", "168", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("패스워드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "78.42%", "168", null, "30", "15.72%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("성별");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "76.37%", "360", null, "30", "20.31%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("호봉");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "58.59%", "104", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("근속연수");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "58.59%", "136", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("입사일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "860", "73", "136", "40", null, null, this);
            obj.set_taborder("11");
            obj.style.set_border("1 solid blueviolet");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "78.42%", "200", null, "30", "15.72%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("재직상태");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "58.59%", "168", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("퇴사일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "58.59%", "200", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("퇴직예정일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "58.59%", "232", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("전화번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "78.42%", "232", null, "30", "15.72%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("국적");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "58.59%", "264", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("휴대폰번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "78.42%", "136", null, "30", "15.72%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("혼인여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "82.32%", "424", null, "30", "13.96%", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_text("은행명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "76.37%", "424", null, "62", "17.87%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("급여계좌");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "76.37%", "392", null, "30", "17.87%", null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("계좌번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "58.59%", "328", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("팩스");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "87.6%", "360", null, "30", "7.71%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("급여일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "82.32%", "456", null, "30", "13.96%", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("예금주");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("imageEd", "absolute", "25.98%", "362", null, "30", "63.77%", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "36.62%", "392", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("기준등록지");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "36.62%", "328", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("고용구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "36.62%", "297", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("직급명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "36.62%", "264", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("직종명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "36.62%", "232", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("34");
            obj.set_text("직위명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "36.62%", "200", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("생년월일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "36.62%", "136", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("36");
            obj.set_text("주민번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "36.62%", "424", null, "62", "57.52%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("주소");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "36.62%", "104", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "36.62%", "72", null, "30", "57.52%", null, this);
            obj.getSetter("taborder").set("39");
            obj.set_text("사번/성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("empBirthdayEd", "absolute", "42.68%", "200", null, "30", "48.93%", null, this);
            obj.set_taborder("41");
            obj.set_type("string");
            obj.set_mask("####'/'##'/'##");
            obj.set_cssclass("AreaMaskEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("empRrnEd", "absolute", "42.68%", "136", null, "30", "44.04%", null, this);
            obj.set_taborder("42");
            obj.set_type("string");
            obj.set_mask("######'-'#######");
            obj.set_cssclass("AreaMaskEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0.68%", "68", "177", "655", null, null, this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_text("Div01");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);
            obj = new Button("btn_empcheck", "absolute", "138", "57", "31", "28", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniBtn2.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.71%", "7", null, "15", "26.86%", null, this.Div01);
            obj.getSetter("taborder").set("1");
            obj.set_text("사원탐색");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "1.07%", "95", null, "30", "95.61%", null, this);
            obj.getSetter("taborder").set("45");
            obj.set_text("사번");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("searchEmpNoEd", "absolute", "4.49%", "95", null, "30", "86.04%", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchEmpNmEd", "absolute", "4.49%", "126", null, "30", "86.04%", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1.07%", "126", null, "30", "95.61%", null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "58.59%", "72", null, "30", "35.64%", null, this);
            obj.getSetter("taborder").set("49");
            obj.set_text("권한");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Radio("workStatusRadio", "absolute", "85.16%", "203", null, "30", "1.27%", null, this);
            this.addChild(obj.name, obj);
            var workStatusRadio_innerdataset = new Dataset("workStatusRadio_innerdataset", this.workStatusRadio);
            workStatusRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">재직</Col><Col id=\"datacolumn\">재직</Col></Row><Row><Col id=\"codecolumn\">휴직</Col><Col id=\"datacolumn\">휴직</Col></Row><Row><Col id=\"codecolumn\">퇴직</Col><Col id=\"datacolumn\">퇴직</Col></Row></Rows>");
            obj.set_innerdataset(workStatusRadio_innerdataset);
            obj.set_taborder("50");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaRadio");
            obj.style.set_color("black");
            obj.style.set_font("9 Dotum");

            obj = new MaskEdit("telMaskEd", "absolute", "64.55%", "232", null, "30", "24.12%", null, this);
            obj.set_taborder("51");
            obj.set_type("string");
            obj.set_mask("###'-'###'-'####");
            obj.set_cssclass("AreaMaskEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("phoneMaskEd", "absolute", "64.55%", "264", null, "30", "24.12%", null, this);
            obj.set_taborder("52");
            obj.set_type("string");
            obj.set_mask("###'-'####'-'####");
            obj.set_cssclass("AreaMaskEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("extsnMaskEd", "absolute", "64.55%", "296", null, "30", "24.12%", null, this);
            obj.set_taborder("53");
            obj.set_type("string");
            obj.set_mask("###'-'###'-'####");
            obj.set_cssclass("AreaMaskEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("faxMaskEd", "absolute", "64.55%", "328", null, "30", "24.12%", null, this);
            obj.set_taborder("54");
            obj.set_type("string");
            obj.set_mask("###'-'###'-'####");
            obj.set_cssclass("AreaMaskEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("retMonthWorkingdaysCal", "absolute", "64.55%", "200", null, "30", "24.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_expr("expr:Date()");
            obj.set_cssclass("AreaCal");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Calendar("empRetDateCal", "absolute", "64.55%", "168", null, "30", "24.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_expr("expr:Date()");
            obj.set_cssclass("AreaCal");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Calendar("hireDateCal", "absolute", "64.55%", "136", null, "30", "24.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_expr("expr:Date()");
            obj.set_cssclass("AreaCal");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new CheckBox("frignSingleTxrateCheck", "absolute", "96.78%", "264", null, "30", "1.07%", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("AreaCheck");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "87.99%", "264", null, "30", "3.91%", null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("외국인세율");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "78.42%", "264", null, "30", "15.72%", null, this);
            obj.getSetter("taborder").set("60");
            obj.set_text("외국인");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "76.27%", "296", null, "30", "15.72%", null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("   외국인    등록번호");
            obj.set_wordwrap("english");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Combo("bankNmCombo", "absolute", "86.52%", "424", "123", "30", null, null, this);
            this.addChild(obj.name, obj);
            var bankNmCombo_innerdataset = new Dataset("bankNmCombo_innerdataset", this.bankNmCombo);
            bankNmCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신한은행</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">국민은행</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">우리은행</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">서울은행</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">조흥은행</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">농협</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">축협은행</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">외환은행</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">기업은행</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">하나은행</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">제일은행</Col></Row></Rows>");
            obj.set_innerdataset(bankNmCombo_innerdataset);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaCombo");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("hireDivCombo", "absolute", "42.68%", "328", "155", "30", null, null, this);
            this.addChild(obj.name, obj);
            var hireDivCombo_innerdataset = new Dataset("hireDivCombo_innerdataset", this.hireDivCombo);
            hireDivCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">정규직</Col><Col id=\"datacolumn\">정규직</Col></Row><Row><Col id=\"codecolumn\">비정규직</Col><Col id=\"datacolumn\">비정규직</Col></Row><Row><Col id=\"codecolumn\">별정직</Col><Col id=\"datacolumn\">별정직</Col></Row></Rows>");
            obj.set_innerdataset(hireDivCombo_innerdataset);
            obj.set_taborder("63");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaCombo");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("jobrkCombo", "absolute", "42.68%", "296", "155", "30", null, null, this);
            this.addChild(obj.name, obj);
            var jobrkCombo_innerdataset = new Dataset("jobrkCombo_innerdataset", this.jobrkCombo);
            jobrkCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">의사</Col><Col id=\"datacolumn\">의사</Col></Row><Row><Col id=\"codecolumn\">초빙의사</Col><Col id=\"datacolumn\">초빙의사</Col></Row><Row><Col id=\"codecolumn\">전임의사</Col><Col id=\"datacolumn\">전임의사</Col></Row><Row><Col id=\"codecolumn\">일반의사</Col><Col id=\"datacolumn\">일반의사</Col></Row><Row><Col id=\"codecolumn\">레지던트</Col><Col id=\"datacolumn\">레지던트</Col></Row><Row><Col id=\"codecolumn\">인턴</Col><Col id=\"datacolumn\">인턴</Col></Row><Row><Col id=\"codecolumn\">매니저2급연구원</Col><Col id=\"datacolumn\">매니저2급연구원</Col></Row><Row><Col id=\"codecolumn\">매니저1급연구원</Col><Col id=\"datacolumn\">매니저1급연구원</Col></Row><Row><Col id=\"codecolumn\">시니어2급연구원</Col><Col id=\"datacolumn\">시니어2급연구원</Col></Row><Row><Col id=\"codecolumn\">시니어1급연구원</Col><Col id=\"datacolumn\">시니어1급연구원</Col></Row><Row><Col id=\"codecolumn\">주니어2급연구원</Col><Col id=\"datacolumn\">주니어2급연구원</Col></Row><Row><Col id=\"codecolumn\">주니어1급연구원</Col><Col id=\"datacolumn\">주니어1급연구원</Col></Row><Row><Col id=\"codecolumn\">매니저2급약사</Col><Col id=\"datacolumn\">매니저2급약사</Col></Row><Row><Col id=\"codecolumn\">매니저1급약사</Col><Col id=\"datacolumn\">매니저1급약사</Col></Row><Row><Col id=\"codecolumn\">시니어2급약사</Col><Col id=\"datacolumn\">시니어2급약사</Col></Row><Row><Col id=\"codecolumn\">시니어1급약사</Col><Col id=\"datacolumn\">시니어1급약사</Col></Row><Row><Col id=\"codecolumn\">주니어2급약사</Col><Col id=\"datacolumn\">주니어2급약사</Col></Row><Row><Col id=\"codecolumn\">주니어1급약사</Col><Col id=\"datacolumn\">주니어1급약사</Col></Row><Row><Col id=\"codecolumn\">매니저2급간호사</Col><Col id=\"datacolumn\">매니저2급간호사</Col></Row><Row><Col id=\"codecolumn\">매니저1급간호사</Col><Col id=\"datacolumn\">매니저1급간호사</Col></Row><Row><Col id=\"codecolumn\">시니어2급간호사</Col><Col id=\"datacolumn\">시니어2급간호사</Col></Row><Row><Col id=\"codecolumn\">시니어1급간호사</Col><Col id=\"datacolumn\">시니어1급간호사</Col></Row><Row><Col id=\"codecolumn\">주니어2급간호사</Col><Col id=\"datacolumn\">주니어2급간호사</Col></Row><Row><Col id=\"codecolumn\">주니어1급간호사</Col><Col id=\"datacolumn\">주니어1급간호사</Col></Row><Row><Col id=\"codecolumn\">매니저2급기사</Col><Col id=\"datacolumn\">매니저2급기사</Col></Row><Row><Col id=\"codecolumn\">매니저1급기사</Col><Col id=\"datacolumn\">매니저1급기사</Col></Row><Row><Col id=\"codecolumn\">시니어2급기사</Col><Col id=\"datacolumn\">시니어2급기사</Col></Row><Row><Col id=\"codecolumn\">시니어1급기사</Col><Col id=\"datacolumn\">시니어1급기사</Col></Row><Row><Col id=\"codecolumn\">주니어2급기사</Col><Col id=\"datacolumn\">주니어2급기사</Col></Row><Row><Col id=\"codecolumn\">주니어1급기사</Col><Col id=\"datacolumn\">주니어1급기사</Col></Row><Row><Col id=\"codecolumn\">매니저2급행정원</Col><Col id=\"datacolumn\">매니저2급행정원</Col></Row><Row><Col id=\"codecolumn\">매니저1급행정원</Col><Col id=\"datacolumn\">매니저1급행정원</Col></Row><Row><Col id=\"codecolumn\">시니어2급행정원</Col><Col id=\"datacolumn\">시니어2급행정원</Col></Row><Row><Col id=\"codecolumn\">시니어1급행정원</Col><Col id=\"datacolumn\">시니어1급행정원</Col></Row><Row><Col id=\"codecolumn\">주니어2급행정원</Col><Col id=\"datacolumn\">주니어2급행정원</Col></Row><Row><Col id=\"codecolumn\">주니어1급행정원</Col><Col id=\"datacolumn\">주니어1급행정원</Col></Row><Row><Col id=\"codecolumn\">어시스턴트3급행정원</Col><Col id=\"datacolumn\">어시스턴트3급행정원</Col></Row><Row><Col id=\"codecolumn\">어시스턴트2급행정원</Col><Col id=\"datacolumn\">어시스턴트2급행정원</Col></Row><Row><Col id=\"codecolumn\">어시스턴트1급행정원</Col><Col id=\"datacolumn\">어시스턴트1급행정원</Col></Row><Row><Col id=\"codecolumn\">매니저2급기술원</Col><Col id=\"datacolumn\">매니저2급기술원</Col></Row><Row><Col id=\"codecolumn\">매니저1급기술원</Col><Col id=\"datacolumn\">매니저1급기술원</Col></Row><Row><Col id=\"codecolumn\">시니어2급기술원</Col><Col id=\"datacolumn\">시니어2급기술원</Col></Row><Row><Col id=\"codecolumn\">시니어1급기술원</Col><Col id=\"datacolumn\">시니어1급기술원</Col></Row><Row><Col id=\"codecolumn\">주니어2급기술원</Col><Col id=\"datacolumn\">주니어2급기술원</Col></Row><Row><Col id=\"codecolumn\">주니어1급기술원</Col><Col id=\"datacolumn\">주니어1급기술원</Col></Row><Row><Col id=\"codecolumn\">어시스턴트3급기술원</Col><Col id=\"datacolumn\">어시스턴트3급기술원</Col></Row><Row><Col id=\"codecolumn\">어시스턴트2급기술원</Col><Col id=\"datacolumn\">어시스턴트2급기술원</Col></Row><Row><Col id=\"codecolumn\">어시스턴트1급기술원</Col><Col id=\"datacolumn\">어시스턴트1급기술원</Col></Row><Row><Col id=\"codecolumn\">아르바이트생</Col><Col id=\"datacolumn\">아르바이트생</Col></Row><Row><Col id=\"codecolumn\">기능원</Col><Col id=\"datacolumn\">기능원</Col></Row><Row><Col id=\"codecolumn\">위촉연구원</Col><Col id=\"datacolumn\">위촉연구원</Col></Row><Row><Col id=\"codecolumn\">박사후연수생</Col><Col id=\"datacolumn\">박사후연수생</Col></Row><Row><Col id=\"codecolumn\">석사후연구생</Col><Col id=\"datacolumn\">석사후연구생</Col></Row><Row><Col id=\"codecolumn\">연구보조원</Col><Col id=\"datacolumn\">연구보조원</Col></Row><Row><Col id=\"codecolumn\">박사과정연구생</Col><Col id=\"datacolumn\">박사과정연구생</Col></Row><Row><Col id=\"codecolumn\">석사과정연구생</Col><Col id=\"datacolumn\">석사과정연구생</Col></Row><Row><Col id=\"codecolumn\">파견직원(단장급)</Col><Col id=\"datacolumn\">파견직원(단장급)</Col></Row><Row><Col id=\"codecolumn\">파견직원(부장급)</Col><Col id=\"datacolumn\">파견직원(부장급)</Col></Row><Row><Col id=\"codecolumn\">파견직원(팀장급)</Col><Col id=\"datacolumn\">파견직원(팀장급)</Col></Row><Row><Col id=\"codecolumn\">파견직원(일반급)</Col><Col id=\"datacolumn\">파견직원(일반급)</Col></Row><Row><Col id=\"codecolumn\">별정직</Col><Col id=\"datacolumn\">별정직</Col></Row><Row><Col id=\"codecolumn\">협력사원</Col><Col id=\"datacolumn\">협력사원</Col></Row></Rows>");
            obj.set_innerdataset(jobrkCombo_innerdataset);
            obj.set_taborder("64");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaCombo");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("jobclCombo", "absolute", "42.68%", "264", "155", "30", null, null, this);
            this.addChild(obj.name, obj);
            var jobclCombo_innerdataset = new Dataset("jobclCombo_innerdataset", this.jobclCombo);
            jobclCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">기관장</Col><Col id=\"datacolumn\">기관장</Col></Row><Row><Col id=\"codecolumn\">의무직</Col><Col id=\"datacolumn\">의무직</Col></Row><Row><Col id=\"codecolumn\">연구의무직</Col><Col id=\"datacolumn\">연구의무직</Col></Row><Row><Col id=\"codecolumn\">연구직</Col><Col id=\"datacolumn\">연구직</Col></Row><Row><Col id=\"codecolumn\">임상연구직</Col><Col id=\"datacolumn\">임상연구직</Col></Row><Row><Col id=\"codecolumn\">약무직</Col><Col id=\"datacolumn\">약무직</Col></Row><Row><Col id=\"codecolumn\">간호직</Col><Col id=\"datacolumn\">간호직</Col></Row><Row><Col id=\"codecolumn\">보건직</Col><Col id=\"datacolumn\">보건직</Col></Row><Row><Col id=\"codecolumn\">행정직</Col><Col id=\"datacolumn\">행정직</Col></Row><Row><Col id=\"codecolumn\">기술직</Col><Col id=\"datacolumn\">기술직</Col></Row><Row><Col id=\"codecolumn\">별정직</Col><Col id=\"datacolumn\">별정직</Col></Row><Row><Col id=\"codecolumn\">외부인력</Col><Col id=\"datacolumn\">외부인력</Col></Row><Row><Col id=\"codecolumn\">파견직</Col><Col id=\"datacolumn\">파견직</Col></Row></Rows>");
            obj.set_innerdataset(jobclCombo_innerdataset);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaCombo");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("jobttlCombo", "absolute", "42.68%", "232", "155", "30", null, null, this);
            this.addChild(obj.name, obj);
            var jobttlCombo_innerdataset = new Dataset("jobttlCombo_innerdataset", this.jobttlCombo);
            jobttlCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">동남권원자력의학원장</Col><Col id=\"datacolumn\">동남권원자력의학원장</Col></Row><Row><Col id=\"codecolumn\">원장</Col><Col id=\"datacolumn\">원장</Col></Row><Row><Col id=\"codecolumn\">원장 직무대행</Col><Col id=\"datacolumn\">원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">주임과장</Col><Col id=\"datacolumn\">주임과장</Col></Row><Row><Col id=\"codecolumn\">실장</Col><Col id=\"datacolumn\">실장</Col></Row><Row><Col id=\"codecolumn\">센터장</Col><Col id=\"datacolumn\">센터장</Col></Row><Row><Col id=\"codecolumn\">병원장</Col><Col id=\"datacolumn\">병원장</Col></Row><Row><Col id=\"codecolumn\">병원장 직무대행</Col><Col id=\"datacolumn\">병원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">연구센터장</Col><Col id=\"datacolumn\">연구센터장</Col></Row><Row><Col id=\"codecolumn\">연구센터장 직무대행</Col><Col id=\"datacolumn\">연구센터장 직무대행</Col></Row><Row><Col id=\"codecolumn\">부장</Col><Col id=\"datacolumn\">부장</Col></Row><Row><Col id=\"codecolumn\">부장대우</Col><Col id=\"datacolumn\">부장대우</Col></Row><Row><Col id=\"codecolumn\">부장 직무대행</Col><Col id=\"datacolumn\">부장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)</Col><Col id=\"datacolumn\">실장(부장급)</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)대우</Col><Col id=\"datacolumn\">실장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(부장급) 직무대행</Col><Col id=\"datacolumn\">실장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)</Col><Col id=\"datacolumn\">센터장(부장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)대우</Col><Col id=\"datacolumn\">센터장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급) 직무대행</Col><Col id=\"datacolumn\">센터장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">팀장</Col><Col id=\"datacolumn\">팀장</Col></Row><Row><Col id=\"codecolumn\">팀장대우</Col><Col id=\"datacolumn\">팀장대우</Col></Row><Row><Col id=\"codecolumn\">팀장 직무대행</Col><Col id=\"datacolumn\">팀장 직무대행</Col></Row><Row><Col id=\"codecolumn\">과장</Col><Col id=\"datacolumn\">과장</Col></Row><Row><Col id=\"codecolumn\">과장대우</Col><Col id=\"datacolumn\">과장대우</Col></Row><Row><Col id=\"codecolumn\">과장 직무대행</Col><Col id=\"datacolumn\">과장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)</Col><Col id=\"datacolumn\">실장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)대우</Col><Col id=\"datacolumn\">실장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급) 직무대행</Col><Col id=\"datacolumn\">실장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)</Col><Col id=\"datacolumn\">센터장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)대우</Col><Col id=\"datacolumn\">센터장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급) 직무대행</Col><Col id=\"datacolumn\">센터장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">수간호사</Col><Col id=\"datacolumn\">수간호사</Col></Row><Row><Col id=\"codecolumn\">정책위원</Col><Col id=\"datacolumn\">정책위원</Col></Row></Rows>");
            obj.set_innerdataset(jobttlCombo_innerdataset);
            obj.set_taborder("66");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaCombo");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Edit("empNoEd", "absolute", "42.68%", "72", null, "30", "52.64%", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("AreaEdt");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            obj.style.setStyleValue("font", "disabled", "antialias 10 HY수평선B");
            this.addChild(obj.name, obj);

            obj = new Button("findImageBtn", "absolute", "18.55%", "398", null, "30", "63.77%", null, this);
            obj.set_taborder("68");
            obj.set_text("찾아보기");
            obj.set_cssclass("AreaBtn");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_fzip", "absolute", "42.68%", "424", null, "30", "50.49%", null, this);
            obj.set_taborder("70");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_empAddr", "absolute", "49.71%", "424", null, "30", "24.12%", null, this);
            obj.set_taborder("71");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("detailAddrEd", "absolute", "45.41%", "456", null, "30", "24.12%", null, this);
            obj.set_taborder("72");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_empInfo", "absolute", "18.16%", "500", null, "214", "1.07%", null, this);
            obj.set_taborder("73");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("AreaTab");
            obj.style.set_buttonbackground("@gradation");
            obj.style.set_buttongradation("liner 0,0 #feffffff 0,100 #e1e1dfff [60% #f2f2efff][70% #ecece9ff]");
            obj.style.set_buttonborder("1 solid #a8a8a2ff");
            obj.style.set_buttonbordertype("round 3 3  lefttop");
            obj.style.set_background("transparent");
            obj.style.set_border("1 solid #9f8f71ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff");
            obj.style.set_color("#777777ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tpg_perconaldate", this.tab_empInfo);
            obj.set_text("인적사항");
            this.tab_empInfo.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.24%", "2", null, "187", "-0.12%", null, this.tab_empInfo.tpg_perconaldate);
            obj.set_taborder("0");
            obj.set_binddataset("dsHmPerconaldate");
            obj.set_autofittype("col");
            obj.style.set_font("9 Dotum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"키\"/><Cell col=\"1\" style=\"color: ;\" text=\"몸무게\"/><Cell col=\"2\" style=\"color: ;\" text=\"시력\"/><Cell col=\"3\" style=\"color: ;\" text=\"종교\"/><Cell col=\"4\" style=\"color: ;\" text=\"취미\"/><Cell col=\"5\" style=\"color: ;\" text=\"특기\"/><Cell col=\"6\" style=\"color: ;\" text=\"주거\"/><Cell col=\"7\" style=\"color: ;\" text=\"시민권\"/><Cell col=\"8\" style=\"color: ;\" text=\"영주권\"/><Cell col=\"9\" style=\"color: ;\" text=\"혈액형\"/><Cell col=\"10\" style=\"color: ;\" text=\"생활정도\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:height\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:weight\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:eyeseght\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:religion\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:hobby\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:talent\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:living\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:citizenship\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:perresi\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:bloodType\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:lifeLevel\"/></Band></Format></Formats>");
            this.tab_empInfo.tpg_perconaldate.addChild(obj.name, obj);
            obj = new Tabpage("tpg_family", this.tab_empInfo);
            obj.set_text("가족");
            this.tab_empInfo.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.35%", "2", null, "187", "0.12%", null, this.tab_empInfo.tpg_family);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj._setContents("<Formats></Formats>");
            this.tab_empInfo.tpg_family.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0.23%", "2", null, "187", "0.23%", null, this.tab_empInfo.tpg_family);
            obj.set_taborder("11");
            obj.set_binddataset("dsHmFamily");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"109\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"이름\"/><Cell col=\"1\" style=\"color: ;\" text=\"주민등록번호\"/><Cell col=\"2\" style=\"color: ;\" text=\"관계\"/><Cell col=\"3\" style=\"color: ;\" text=\"동거여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:name\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:rrn\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"combo\" text=\"bind:relt\" combodataset=\"dsFamiliyType\" combodatacol=\"familyType\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:spptYn\"/></Band></Format></Formats>");
            this.tab_empInfo.tpg_family.addChild(obj.name, obj);
            obj = new Tabpage("tpg_education", this.tab_empInfo);
            obj.set_text("학력");
            this.tab_empInfo.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.23%", "2", null, "187", "0.23%", null, this.tab_empInfo.tpg_education);
            obj.set_taborder("0");
            obj.set_binddataset("dsHmEducation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"학교명\"/><Cell col=\"1\" style=\"color: ;\" text=\"전공\"/><Cell col=\"2\" style=\"color: ;\" text=\"입학일\"/><Cell col=\"3\" style=\"color: ;\" text=\"졸업일\"/><Cell col=\"4\" style=\"color: ;\" text=\"학위\"/><Cell col=\"5\" style=\"color: ;\" text=\"최종여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:schoolName\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:major\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:admDay\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:graduDay\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"combo\" text=\"bind:degree\" combodataset=\"dsDegreeType\" combodatacol=\"degreeType\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:finYn\"/></Band></Format></Formats>");
            this.tab_empInfo.tpg_education.addChild(obj.name, obj);
            obj = new Tabpage("tbg_license", this.tab_empInfo);
            obj.set_text("자격 및 면허");
            this.tab_empInfo.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.23%", "2", null, "187", "0.23%", null, this.tab_empInfo.tbg_license);
            obj.set_taborder("0");
            obj.set_binddataset("dsHmLicense");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"자격번호\"/><Cell col=\"1\" style=\"color: ;\" text=\"자격명\"/><Cell col=\"2\" style=\"color: ;\" text=\"취득일자\"/><Cell col=\"3\" style=\"color: ;\" text=\"발행처\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:licenseNo\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"combo\" text=\"bind:licenseType\" combodataset=\"dsLicenseType\" combodatacol=\"licenseType\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:acqDay\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:issue\"/></Band></Format></Formats>");
            this.tab_empInfo.tbg_license.addChild(obj.name, obj);
            obj = new Tabpage("tab_empInfo", this.tab_empInfo);
            obj.set_text("경력");
            this.tab_empInfo.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.23%", "2", null, "187", "0.23%", null, this.tab_empInfo.tab_empInfo);
            obj.set_taborder("0");
            obj.set_binddataset("dsHmCareer");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"근무자명\"/><Cell col=\"1\" style=\"color: ;\" text=\"직급\"/><Cell col=\"2\" style=\"color: ;\" text=\"담당업무\"/><Cell col=\"3\" style=\"color: ;\" text=\"입사일\"/><Cell col=\"4\" style=\"color: ;\" text=\"퇴사일\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:workplace\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:position\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:respTask\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:joinDay\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:retireDay\"/></Band></Format></Formats>");
            this.tab_empInfo.tab_empInfo.addChild(obj.name, obj);
            obj = new Tabpage("tpg_military", this.tab_empInfo);
            obj.set_text("병력");
            this.tab_empInfo.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.23%", "2", null, "187", "0.23%", null, this.tab_empInfo.tpg_military);
            obj.set_taborder("0");
            obj.set_binddataset("dsHmMilitary");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"군번\"/><Cell col=\"1\" style=\"color: ;\" text=\"군별\"/><Cell col=\"2\" style=\"color: ;\" text=\"병과\"/><Cell col=\"3\" style=\"color: ;\" text=\"계급\"/><Cell col=\"4\" style=\"color: ;\" text=\"신체등급\"/><Cell col=\"5\" style=\"color: ;\" text=\"입대일\"/><Cell col=\"6\" style=\"color: ;\" text=\"전역일\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:msn\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"combo\" text=\"bind:mgroup\" combodataset=\"dsMgroupType\" combodatacol=\"mgType\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"combo\" text=\"bind:branch\" combodataset=\"dsBranchType\" combodatacol=\"branchType\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"combo\" text=\"bind:hierarachy\" combodataset=\"dsHierarachyType\" combodatacol=\"hierarachyType\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"combo\" text=\"bind:physiqueGrade\" combodataset=\"dsPhysiqueGradeType\" combodatacol=\"physiqueGradeType\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:joinArmyDay\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:dischargeDay\"/></Band></Format></Formats>");
            this.tab_empInfo.tpg_military.addChild(obj.name, obj);
            obj = new Tabpage("tpg_disability", this.tab_empInfo);
            obj.set_text("장애");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.tab_empInfo.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.23%", "2", null, "187", "0.23%", null, this.tab_empInfo.tpg_disability);
            obj.set_taborder("0");
            obj.set_binddataset("dsHmDisability");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"143\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"장애유형\"/><Cell col=\"1\" style=\"color: ;\" text=\"장애인정구분\"/><Cell col=\"2\" style=\"color: ;\" text=\"장애등급\"/><Cell col=\"3\" edittype=\"normal\" style=\"color: ;\" text=\"장애인정일\"/><Cell col=\"4\" style=\"color: ;\" text=\"중증여부\"/><Cell col=\"5\" style=\"color: ;\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"combo\" text=\"bind:disabilityType\" combodataset=\"dsDisabilityType\" combodatacol=\"physiqueGradeType\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"combo\" text=\"bind:disabilityApvDiv\" combodataset=\"dsDisabilityDivType\" combodatacol=\"divType\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:disabilityGrade\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:disabilityApvDay\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:intensiveYn\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:note\"/></Band></Format></Formats>");
            this.tab_empInfo.tpg_disability.addChild(obj.name, obj);

            obj = new CheckBox("birthCheck", "absolute", "525", "201", "48", "28", null, null, this);
            obj.set_taborder("78");
            obj.set_text("음력");
            this.addChild(obj.name, obj);

            obj = new Edit("empNmEd", "absolute", "47.46%", "72", null, "30", "44.14%", null, this);
            obj.set_taborder("79");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("empDeptCdEd", "absolute", "42.68%", "104", null, "30", "52.64%", null, this);
            obj.set_taborder("80");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("empDeptNmEd", "absolute", "47.46%", "104", null, "30", "44.14%", null, this);
            obj.set_taborder("81");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("empPasswordEd", "absolute", "42.68%", "168", null, "30", "44.04%", null, this);
            obj.set_taborder("82");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("emailMaskEd", "absolute", "42.68%", "360", null, "30", "38.67%", null, this);
            obj.set_taborder("83");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("empPayStepCombo00", "absolute", "61.43%", "360", "148", "30", null, null, this);
            this.addChild(obj.name, obj);
            var empPayStepCombo00_innerdataset = new Dataset("empPayStepCombo00_innerdataset", this.empPayStepCombo00);
            empPayStepCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">@naver.com</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">@nate.com</Col></Row></Rows>");
            obj.set_innerdataset(empPayStepCombo00_innerdataset);
            obj.set_taborder("84");
            obj.set_value("1");
            obj.set_text("@naver.com");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_cssclass("AreaCombo");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Edit("permaddrEd", "absolute", "42.68%", "392", null, "30", "24.22%", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("pmsCdEd", "absolute", "64.45%", "72", null, "30", "24.12%", null, this);
            obj.set_taborder("86");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new CheckBox("mateYnCheck", "absolute", "85.16%", "137", null, "30", "12.7%", null, this);
            obj.set_taborder("87");
            obj.set_cssclass("AreaCheck");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("genderRadio", "absolute", "85.16%", "175", null, "22", "6.54%", null, this);
            this.addChild(obj.name, obj);
            var genderRadio_innerdataset = new Dataset("genderRadio_innerdataset", this.genderRadio);
            genderRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(genderRadio_innerdataset);
            obj.set_taborder("88");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaRadio");
            obj.style.set_color("black");
            obj.style.set_font("9 Dotum");

            obj = new Edit("empNatntEd", "absolute", "84.38%", "232", null, "30", "1.95%", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("bankpsEd", "absolute", "84.38%", "295", null, "30", "1.95%", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new CheckBox("localYnCheck", "absolute", "85.16%", "264", null, "30", "12.99%", null, this);
            obj.set_taborder("91");
            obj.set_cssclass("AreaCheck");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("empPayStepCombo", "absolute", "79.88%", "360", "78", "30", null, null, this);
            this.addChild(obj.name, obj);
            var empPayStepCombo_innerdataset = new Dataset("empPayStepCombo_innerdataset", this.empPayStepCombo);
            empPayStepCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1호봉</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2호봉</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3호봉</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4호봉</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5호봉</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6호봉</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7호봉</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8호봉</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9호봉</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10호봉</Col></Row></Rows>");
            obj.set_innerdataset(empPayStepCombo_innerdataset);
            obj.set_taborder("92");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("AreaCombo");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Edit("accountNmEd", "absolute", "82.32%", "392", null, "30", "1.46%", null, this);
            obj.set_taborder("93");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("imageEd29", "absolute", "86.52%", "456", null, "30", "1.46%", null, this);
            obj.set_taborder("94");
            obj.set_cssclass("AreaEdt");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("payDateSpin", "absolute", "92.48%", "360", "62", "29", null, null, this);
            obj.set_taborder("95");
            obj.set_value("1");
            obj.set_displaynulltext("1");
            obj.set_max("31");
            obj.set_cssclass("AreaSpin");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_PDF", "absolute", "85.45%", "79", null, "30", "9.67%", null, this);
            obj.set_taborder("96");
            obj.set_text("PDF");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("empListGrid", "absolute", "1.07%", "160", "168", "558", null, null, this);
            obj.set_cssclass("AreaGrid");
            obj.set_taborder("97");
            obj.set_binddataset("dsHmEmp");
            obj.set_autofittype("col");
            obj.style.set_color("#5f5f5fff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("100");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"42\"/><Column size=\"97\"/><Column size=\"137\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\"/><Cell col=\"1\" style=\"font: ;\" text=\"NO\"/><Cell col=\"2\" style=\"color:black;font: ;\" text=\"사번\"/><Cell col=\"3\" style=\"font: ;\" text=\"사원명\"/></Band><Band id=\"body\"><Cell celltype=\"body\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"color:EXPR(gender=='M'?'black':'blue');color2:EXPR(gender=='M'?'black':'blue');\" text=\"bind:select\" editautoselect=\"false\" editdisplay=\"edit\"/><Cell col=\"1\" style=\"color:EXPR(gender=='M'?'black':'blue');color2:EXPR(gender=='M'?'black':'blue');\" expr=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;color:EXPR(gender=='M'?'black':'blue');color2:EXPR(gender=='M'?'black':'blue');\" text=\"bind:empNo\"/><Cell col=\"3\" edittype=\"none\" style=\"color:EXPR(gender=='M'?'black':'blue');color2:EXPR(gender=='M'?'black':'blue');\" text=\"bind:empNm\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"background:gainsboro;\" text=\"사원수\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"background:gainsboro;\" expr=\"expr:dataset.getRowCount()\" mask=\"###명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "36.72%", "359", null, "30", "57.42%", null, this);
            obj.getSetter("taborder").set("100");
            obj.set_text("e-mail");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("btn_empDeptPopup", "absolute", "573", "103", "27", "29", null, null, this);
            obj.set_taborder("101");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_findZip", "absolute", "439", "455", "25", "28", null, null, this);
            obj.set_taborder("102");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "84.77%", "494", null, "26", "8.59%", null, this);
            obj.set_taborder("103");
            obj.set_text("행추가");
            obj.style.set_background("slateblue");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "91.7%", "494", null, "27", "1.56%", null, this);
            obj.set_taborder("104");
            obj.set_text("행삭제");
            obj.style.set_background("slateblue");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("btn_empPopup", "absolute", "146", "96", "31", "28", null, null, this);
            obj.set_taborder("105");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn15", "absolute", "616", "728", "90", "32", null, null, this);
            obj.set_taborder("108");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn00", "absolute", "710", "728", "90", "32", null, null, this);
            obj.set_taborder("109");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn19", "absolute", "804", "728", "110", "32", null, null, this);
            obj.set_taborder("110");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn17", "absolute", "918", "728", "90", "32", null, null, this);
            obj.set_taborder("111");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "0%", "0", "1013", "60", null, null, this);
            obj.set_taborder("113");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5.57%", "-1", null, "51", "39.84%", null, this);
            obj.getSetter("taborder").set("114");
            obj.set_text("인사마스터");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 839, 425, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 839, 227, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 177, 655, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_tabstop("false");
            		p.set_text("Div01");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1075, 193, this.tab_empInfo.tpg_perconaldate,
            	//-- Layout function
            	function(p) {
            		p.set_text("인적사항");

            	}
            );
            this.tab_empInfo.tpg_perconaldate.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_empInfo.tpg_family,
            	//-- Layout function
            	function(p) {
            		p.set_text("가족");

            	}
            );
            this.tab_empInfo.tpg_family.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_empInfo.tpg_education,
            	//-- Layout function
            	function(p) {
            		p.set_text("학력");

            	}
            );
            this.tab_empInfo.tpg_education.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_empInfo.tbg_license,
            	//-- Layout function
            	function(p) {
            		p.set_text("자격 및 면허");

            	}
            );
            this.tab_empInfo.tbg_license.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_empInfo.tab_empInfo,
            	//-- Layout function
            	function(p) {
            		p.set_text("경력");

            	}
            );
            this.tab_empInfo.tab_empInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_empInfo.tpg_military,
            	//-- Layout function
            	function(p) {
            		p.set_text("병력");

            	}
            );
            this.tab_empInfo.tpg_military.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_empInfo.tpg_disability,
            	//-- Layout function
            	function(p) {
            		p.set_text("장애");
            		p.style.set_gradation("none 0,0 white 100,100 black");

            	}
            );
            this.tab_empInfo.tpg_disability.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1013, 60, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("113");
            		p.style.set_background("transparent URL('img::titleBar2.jpg')");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 770, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HM_PersonMasterForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","imageEd","value","dsHmEmp","image");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","empBirthdayEd","value","dsHmEmp","birthday");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","empRrnEd","value","dsHmEmp","rrn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","workStatusRadio","value","dsHmEmp","workStatus");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","telMaskEd","value","dsHmEmp","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","phoneMaskEd","value","dsHmEmp","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","extsnMaskEd","value","dsHmEmp","extsn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","faxMaskEd","value","dsHmEmp","fax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","retMonthWorkingdaysCal","value","dsHmEmp","retMonthWorkingdays");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","empRetDateCal","value","dsHmEmp","retDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","hireDateCal","value","dsHmEmp","hireDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","frignSingleTxrateCheck","value","dsHmEmp","frignSingleTxrate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","bankNmCombo","value","dsHmEmp","bankNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","hireDivCombo","value","dsHmEmp","hireDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","jobrkCombo","value","dsHmEmp","jobrk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","jobclCombo","value","dsHmEmp","jobcl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","jobttlCombo","value","dsHmEmp","jobtt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","empNoEd","value","dsHmEmp","empNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edit_fzip","value","dsHmEmp","zipCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edit_empAddr","value","dsHmEmp","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","detailAddrEd","value","dsHmEmp","detailAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","empNmEd","value","dsHmEmp","empNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","empDeptCdEd","value","dsHmEmp","deptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","empDeptNmEd","value","dsHmEmp","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","empPasswordEd","value","dsHmEmp","password");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","emailMaskEd","value","dsHmEmp","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","permaddrEd","value","dsHmEmp","permaddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","pmsCdEd","value","dsHmEmp","pms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","mateYnCheck","value","dsHmEmp","mateYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","genderRadio","value","dsHmEmp","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","empNatntEd","value","dsHmEmp","natnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","bankpsEd","value","dsHmEmp","bankNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","empPayStepCombo","value","dsHmEmp","payStep");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","accountNmEd","value","dsHmEmp","accountNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","imageEd29","value","dsHmEmp","empNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","payDateSpin","value","dsHmEmp","payDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","payDateSpin","visible","dsHmEmp","payDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HM_PersonMasterForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HM_PersonMasterForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HM_PersonMasterForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사마스터                                                       *
        *                                                                   *
        * @Path		    인사 상세정보 관리        	                    *
        * @Description  인사정보/상세정보 조회,등록,수정,삭제 화면     *
        * @Author		최창근   					                        *
        * 								                                    *
        * Created on 2016. 5. 26.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::hrsScripts.xjs"
        //include "scripts::commonScripts.xjs"

        //이미지 변수
        var imagePath ="";
        var image = "";
        var imgName = "";

        //화면 초기화작업
        this.HM_PersonMasterForm_oninit = function(obj,e)
        {
        	this.gfnService("searchEmp");
        }

        //사원의 상세정보 조회
        this.btn_searchEmp_onclick = function(obj,e)
        {
        		if(this.searchEmpNoEd.value==null && this.searchEmpNmEd.value==null)  { alert("사원번호, 사원명을 선택해주세요"); return false; }
         		empNo = this.searchEmpNoEd.value;  // 사번
        		empNm = this.searchEmpNmEd.value;  // 성명

        		
        		var argument = 'empNo='+empNo+' empNm='+empNm;
        		this.dsService.setColumn(2,"argument",argument);
        		alert(argument);
        		var check = confirm("해당사원의 상세정보를 조회하하시겠습니까?");
        		if(check)
        		this.gfnService("searchEmp");
        }

        
        //사원 검색 팝업
        this.btn_empPopup_onclick = function(obj,e)
        {
        	this.gfn_EmpPopup();
        	
        	this.setEmpInfo = function(arrRtn){//set_value 해야 들어감
        										this.searchEmpNoEd.set_value(arrRtn[0]);
        										this.searchEmpNmEd.set_value(arrRtn[1]);
        										}
        }

        //그리드내 사원 탐색
        this.btn_empcheck_onclick = function(obj,e)
        {
        	var enm = this.searchEmpNmEd.value;
        	var eno = this.searchEmpNoEd.value;
        	
        	if(enm!=""){ var selNo = this.dsHmEmp.findRowAs("empNm",enm,this.dsHmEmp.rowposition+1); //일단 밑에꺼찾고
        					if(selNo==-1)selNo = this.dsHmEmp.findRowAs("empNm",enm); //없으면 전체로 찾는다.
        	}else{
        		var selNo = this.dsHmEmp.findRowAs("empNo",eno,this.dsHmEmp.rowposition+1);
        					if(selNo==-1)selNo = this.dsHmEmp.findRowAs("empNo",eno);
        	}
        		this.dsHmEmp.set_rowposition(selNo); //해당 로우 선택
        }

        //주소검색
        this.btn_findZip_onclick = function(obj,e)
        {
        	this.gfnPostPopup();
        		this.setPost = function(arrRtn){ 
        									this.edit_fzip.set_value(arrRtn[2]); 
        									this.edit_empAddr.set_value(arrRtn[0]); 
        									this.detailAddrEd.set_value(arrRtn[1]);
        									}
        }

        //사진등록
        this.findImageBtn_onclick = function(obj,e)
        {
        	trace("사진찾아보기");
        	this.fileDialog.open("FileOpen",FileDialog.LOAD);
        }

        //다이알로그 닫을시
        this.fileDialog_onclose = function(obj,e)
        {
        	trace("닫기");
        	if(e.virtualfiles.length == 0 ){return;}
        	trace(e.virtualfiles[0].fullpath);
        			var realpath = system.convertRealPath(e.virtualfiles[0].fullpath);
        		this.goodsImg.set_image("file://" + realpath);
        	 this.fileImg.open(e.virtualfiles[0].fullpath,VirtualFile.openRead | VirtualFile.openBinary);
        	
        }

        this.fileImg_onerror = function(obj,e)
        {
        	alert("버쳐파일실패");
        }

        this.fileImg_onsuccess = function(obj,e)
        {
        	imgName=this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"empNo")+obj.filename; 
        	application.gdsEmp.setColumn(this.dsHmEmp.rowposition,"image",imgName);
        	trace(imgName);
        	trace(e.reason);//reason : 이벤트가 발생한 이유?에 따른 결과번호
        	
        	switch(e.reason){
        		case 1 : trace("이미지 open"); this.fileImg.read(); break;
        		case 2 : trace("이미지 close"); break;
        		case 3 : trace("이미지 read");
        		this.dsImage.clearData();
        		this.dsImage.addRow();
        		this.dsImage.setColumn(0, "imgNm", imgName);
        		this.dsImage.setColumn(0, "imgBinary", e.binarydata);
        		obj.getFileSize(); 
        		this.fileImg.close(); 
        		this.gfnService("empImage");//db에 저장한뒤 저장한 경로로 보여준다.
        		
        		break;
        		
        		case 9 : trace("파일사이즈"); trace("파일사이즈 : " + e.filesize); break;
        		}
        }

        //이미지 보여주기 (이미지 등록시 콜백함수)
        this.fn_imageSet = function(){
        	this.dsHmEmp.setColumn(this.dsHmEmp.rowposition,"image", imgName);
        	this.imgName = this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"image");
        	trace(imgName);
        	if(this.gfnIsNull(this.imgName)){
        		this.imageViewer.set_image(null);
        		this.imageEd.set_value("");
        	}
        	
        	this.imageViewer.set_image("http://localhost:8282/img/"+this.imgName);
        }

        

        

        this.dsHmEmp_onrowposchanged = function(obj,e)
        {
        	var empNo = this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"empNo");
        		 	this.dsHmFamily.filter("empNo=='"+empNo+"'");  
        			this.dsHmEducation.filter("empNo=='"+empNo+"'");
        			this.dsHmCareer.filter("empNo=='"+empNo+"'");
        			this.dsHmLicense.filter("empNo=='"+empNo+"'");
        			this.dsHmPerconaldate.filter("empNo=='"+empNo+"'");
        			this.dsHmDisability.filter("empNo=='"+empNo+"'");
        			this.dsHmMilitary.filter("empNo=='"+empNo+"'");
        			//alert(empNo);
        			//alert(dsHmFamily.getColumn(1));
        }

        //사원추가
        this.btn_insertEmp_onclick = function(obj,e)
        {
        	 this.dsHmEmp.addRow(); 
        	this.dsHmEmp.setColumn(this.dsHmEmp.rowposition,"sts","insert");//줄하나더만들고 sts자리에  insert 새긴다
        	empSeqNo = (this.dsHmEmp.getRowCount()).toString().padLeft(3,"0");//사원넘버 자동 생성  //3자리고 그줄번호 앞에 0을 붙인다
        	newNo = "45" + empSeqNo;     alert(empSeqNo);   //첫반째줄이면 45+001 이런식으로 만든다    
        	this.dsHmEmp.setColumn(this.dsHmEmp.rowposition,"empNo",newNo);//선택줄에 만든사번 넣는다
        }

        // 사원정보(사원번호, 사원명) 행삭제 [삭제]
        this.btn_deleteEmp_onclick = function(obj,e){
        	this.dsHmEmp.deleteRow(this.dsHmEmp.rowposition);}
        	
        	
        this.Button00_onclick = function(obj,e)
        {
        	var empNo = this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"empNo"); 
        		//alert(this.tab_empInfo.tabindex);
        	switch (this.tab_empInfo.tabindex){ //인적사항 체크tabindex붙이면 탭번호를 뜻한다
        		case 0 : if(this.dsHmPerconaldate.rowcount=='0'){ 
        														this.dsHmPerconaldate.addRow(); 
        														this.dsHmPerconaldate.setColumn(this.dsHmPerconaldate.rowposition,"empNo",empNo);
        														}
        				 else { alert("한명의 사원당 인적사항은 하나입니다"); }break; 
        		
        		case 1 : this.dsHmFamily.addRow(); 
        					this.dsHmFamily.setColumn(this.dsHmFamily.rowposition,"empNo",empNo); break;
        		case 2 : this.dsHmEducation.addRow(); 
        					this.dsHmEducation.setColumn(this.dsHmEducation.rowposition,"empNo",empNo); break;
        		case 3 : this.dsHmLicense.addRow(); 
        					this.dsHmLicense.setColumn(this.dsHmLicense.rowposition,"empNo",empNo); break;
        		case 4 : this.dsHmCareer.addRow(); 
        					this.dsHmCareer.setColumn(this.dsHmCareer.rowposition,"empNo",empNo); break;
        		case 5 : this.dsHmMilitary.addRow(); 
        					this.dsHmMilitary.setColumn(this.dsHmMilitary.rowposition,"empNo",empNo); break;	
        		case 6 : this.dsHmDisability.addRow(); 
        					this.dsHmDisability.setColumn(this.dsHmDisability.rowposition,"empNo",empNo); break;}
        		}

        

        
        this.Button01_onclick = function(obj,e)
        {

        	switch (this.tab_empInfo.tabindex){
        		case 0 : this.dsHmPerconaldate.deleteRow(this.dsHmPerconaldate.rowposition); break;
        		case 1 : this.dsHmFamily.deleteRow(this.sHmFamily.rowposition); break;
        		case 2 : this.dsHmEducation.deleteRow(this.dsHmEducation.rowposition); break;
        		case 3 : this.dsHmLicense.deleteRow(this.dsHmLicense.rowposition); break;
        		case 4 : this.dsHmCareer.deleteRow(this.dsHmCareer.rowposition); break;
        		case 5 : this.dsHmMilitary.deleteRow(this.dsHmMilitary.rowposition); break;
        		case 6 : this.dsHmDisability.deleteRow(this.dsHmDisability.rowposition); break;}	
        }

        this.exitFxAstBtn_onclick = function(obj,e)
        {
        	this.close(); 
        }

        this.btn_saveAll_onclick = function(obj,e)
        {
        	if(confirm("변경된 사원정보를 저장하시겠습니까?")){this.gfnService("mngntEmp");}
        }

        this.Div01_btn_empcheck_onclick = function(obj,e)
        {
        	var nm=this.searchEmpNmEd.value;   
        	var noed=this.searchEmpNoEd.value;  
        	
        															//this.dsHmEmp.rowposition+1위치는 시작행 위치이다 바로 선택줄 +1이므로 검색버튼 누를때마다 검색하면서 아래에서 찾아간다
         	if(nm==""){	 	   selNo = this.dsHmEmp.findRowAs("empNo",noed,this.dsHmEmp.rowposition+1); alert(selNo); // 사원번호
        					if(selNo==-1)selNo = this.dsHmEmp.findRowAs("empNo",noed); //만약 없다면 첨부터 찾는다
         	}else{ 
        					var selNo = this.dsHmEmp.findRowAs("empNm",nm,this.dsHmEmp.rowposition+1); //이름에 빈칸이면 아래가서 사번꺼 찾는다
        					this.searchEmpNoEd.set_value("");//혹시 사번텍스트에 이름과 다른 사번이있으면 이상하니 그값은 빈칸으로 만든다
        					if(selNo==-1)selNo = this.dsHmEmp.findRowAs("empNm",nm); //만약 없다면 첨부터 찾는다
        	}
        		this.dsHmEmp.set_rowposition(selNo);          //그줄을 선택한다 
        	//Dataset.findRowAs(strColID,strVal,[nStartIdx[,nEndIdx]])//첫이름만 나와도 해당번호찾기 맨앞에꺼 순으로 (해당칼럼,해당행,시작행,끝행)
        }

        //부서검색
        this.btn_empDeptPopup_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GP500");
        	this.setCode = function(code,arrRtn){
        		this.empDeptCdEd.set_value(arrRtn[0]);
        		this.empDeptNmEd.set_value(arrRtn[1]);
        	}
        }

        //사원선택시 이벤트
        this.empListGrid_oncellclick = function(obj,e)
        {
        	var empNo = this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"empNo");
        	
        	var imgNm  = this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"image");
        	this.imageEd.set_value(imgNm);
        	trace("dddddd" + imgNm);
        	this.imageViewer.set_image("http://localhost:8282/img/"+imgNm);
        }

        this.callbackFunc = function(svcID,errorCode,errorMsg){
           
           if(svcID == "empImage"){
           if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              this.fn_imageSet();
           }
           
           }
        }

        //pdf
        this.Div02_Button_PDF_onclick = function(obj,e)
        {
        	var searchEmpNo = this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"empNo");
        	trace(searchEmpNo);
          application.open("사원정보","hrs::HM_ReportForm.xfdl",this.parent,{selectEmp:searchEmpNo},"showtitlebar=true showstatusbar=false", 700, 100, 250, 300);	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.fileImg.addEventHandler("onsuccess", this.fileImg_onsuccess, this);
            this.fileImg.addEventHandler("onerror", this.fileImg_onerror, this);
            this.fileDialog.addEventHandler("onclose", this.fileDialog_onclose, this);
            this.dsHmEmp.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            this.addEventHandler("oninit", this.HM_PersonMasterForm_oninit, this);
            this.Div02.Button_EXL.addEventHandler("onclick", this.Div02_Button_EXL_onclick, this);
            this.Div02.Static26.addEventHandler("onclick", this.Static01_onclick, this);
            this.Div02.Static15.addEventHandler("onclick", this.Static01_onclick, this);
            this.imageViewer.addEventHandler("onclick", this.imageViewer_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static18.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static19.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static21.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static22.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static23.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static24.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static27.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static28.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static29.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static30.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static31.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static35.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static36.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static37.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static14.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static25.addEventHandler("onclick", this.Static01_onclick, this);
            this.imageEd.addEventHandler("oneditclick", this.imageEd_oneditclick, this);
            this.Static15.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static12.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static09.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static08.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static13.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static17.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static01_onclick, this);
            this.Div01.btn_empcheck.addEventHandler("onclick", this.Div02_Button_PDF_onclick, this);
            this.Static26.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static20.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static34.addEventHandler("onclick", this.Static01_onclick, this);
            this.empNoEd.addEventHandler("ontextchange", this.empNoEd_ontextchange, this);
            this.findImageBtn.addEventHandler("onclick", this.findImageBtn_onclick, this);
            this.tab_empInfo.tpg_perconaldate.Grid00.addEventHandler("oncelldblclick", this.tab_empInfo_tpg_perconaldate_Grid00_oncelldblclick, this);
            this.Button_PDF.addEventHandler("onclick", this.Div02_Button_PDF_onclick, this);
            this.empListGrid.addEventHandler("oncellclick", this.empListGrid_oncellclick, this);
            this.empListGrid.addEventHandler("oncelldblclick", this.empListGrid_oncelldblclick, this);
            this.empListGrid.addEventHandler("onselectchanged", this.empListGrid_onselectchanged, this);
            this.empListGrid.addEventHandler("onenterdown", this.empListGrid_onenterdown, this);
            this.Static32.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_empDeptPopup.addEventHandler("onclick", this.btn_empDeptPopup_onclick, this);
            this.btn_findZip.addEventHandler("onclick", this.btn_findZip_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.btn_empPopup.addEventHandler("onclick", this.btn_empPopup_onclick, this);
            this.DelBtn15.addEventHandler("onclick", this.btn_insertEmp_onclick, this);
            this.DelBtn00.addEventHandler("onclick", this.btn_deleteEmp_onclick, this);
            this.DelBtn19.addEventHandler("onclick", this.btn_saveAll_onclick, this);
            this.DelBtn17.addEventHandler("onclick", this.exitFxAstBtn_onclick, this);

        };

        this.loadIncludeScript("HM_PersonMasterForm.xfdl");

       
    };
}
)();

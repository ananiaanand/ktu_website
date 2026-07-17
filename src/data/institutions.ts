import type { Institution, AffiliationNotification } from "../types/institution";

export const mockInstitutions: Institution[] = [
  {
    id: "1",
    name: "College of Engineering Trivandrum",
    district: "Thiruvananthapuram",
    type: "Government",
    code: "TVE",
    isNBAAccredited: true,
    icon: "account_balance"
  },
  {
    id: "2",
    name: "Government Engineering College Thrissur",
    district: "Thrissur",
    type: "Government",
    code: "TCR",
    isNBAAccredited: true,
    icon: "account_balance"
  },
  {
    id: "3",
    name: "Rajagiri School of Engineering & Technology",
    district: "Ernakulam",
    type: "Private Self-Financing",
    code: "RET",
    isNBAAccredited: true,
    icon: "apartment"
  },
  {
    id: "4",
    name: "TKM College of Engineering",
    district: "Kollam",
    type: "Govt. Aided",
    code: "TKM",
    isNBAAccredited: true,
    icon: "account_balance"
  },
  {
    id: "5",
    name: "Muthoot Institute of Technology and Science",
    district: "Ernakulam",
    type: "Private Self-Financing",
    code: "MUT",
    isNBAAccredited: false,
    icon: "apartment"
  }
];

export const mockAffiliationNotifications: AffiliationNotification[] = [
  {
    id: "1",
    title: "Extension of Approval (EoA) for Academic Year 2024-25 - Final List Published",
    date: "July 10, 2024",
    isHighlighted: true
  },
  {
    id: "2",
    title: "Notification regarding addition of new UG programs in affiliated colleges",
    date: "July 05, 2024",
    isHighlighted: false
  },
  {
    id: "3",
    title: "Mandatory NBA Accreditation - Circular to all Self-Financing institutions",
    date: "June 28, 2024",
    isHighlighted: false
  }
];

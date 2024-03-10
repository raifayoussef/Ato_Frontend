const navigation = () => {
  return [
    {
      title: 'Dashboard',
      titleAr: 'لوحة التحكم',
      path: '/dashboards',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Employees',
      titleAr: 'موظفين',
      icon: 'tabler:users',
      children: [
        {
          title: 'Employee Profile',
          titleAr: 'موظفين',
          path: '/Employees/Employee-Profile',
          icon: 'tabler:user-exclamation'
        },
        {
          title: 'Validator Management',
          titleAr: 'إدارة المحقق',
          path: '/Employees/Validator-Management',
          icon: 'tabler:check'
        },
        {
          title: 'Zone Assignment',
          titleAr: 'تعيين المنطقة',
          path: '/Employees/Zone-Assignment',
          icon: 'tabler:map-pins'
        }
      ]
    },
    {
      title: 'Scheduling',
      titleAr: 'جدولة العمل',
      icon: 'tabler:calendar-event',
      children: [
        {
          title: 'View Schedule',
          titleAr: 'عرض الجدول',
          path: '/scheduling/View-Schedule',
          icon: 'tabler:eye'
        },
        {
          title: 'Modify/Assign',
          titleAr: 'تعديل/تعيين',
          path: '/scheduling/Modify-Assign',
          icon: 'tabler:pencil'
        }
      ]
    },
    {
      title: 'Counters',
      titleAr: 'العدادات',
      icon: 'tabler:brand-days-counter',
      children: [
        {
          title: 'Counter Balances',
          titleAr: 'أرصدة مضادة',
          icon :  'tabler:barcode',
          path: '/counters/Counter-Balances'
        },
        {
          title:'Add Counter Credits',
          titleAr: 'إضافة الاعتمادات المضادة',
          icon: 'tabler:plus',
          path: '/counters/Add-Credit'
        }
      ]
    },
    {
      title: 'Absences',
      titleAr: 'الغيابات',
      icon: 'tabler:clock',
      children: [
        {
          title: 'Vacation Requests',
          titleAr: 'طلبات الإجازة',
          icon: 'tabler:sun',
          path: '/Absences/vacations'
        },
        {
          title: 'Absence Requests',
          titleAr: 'طلبات الغياب',
          icon: 'tabler:moon',
          path: '/Absences/requests'
        },
        {
          title: 'Request Tracking',
          titleAr: 'تتبع الطلبات',
          icon: 'tabler:list-check',
          path: '/Absences/track'
        },
        {
          title: 'Request History',
          titleAr: 'سجل الطلبات',
          icon: 'tabler:file-text',
          path: '/Absences/history'
        }
      ]
    },
    {
      title: 'Document Management',
      titleAr: 'إدارة الوثائق',
      icon: 'tabler:files',
      children: [
        {
          title: 'HR Document Request',
          titleAr: 'طلب وثيقة الموارد البشرية',
          icon: 'fa-solid:file-import',
          path: '/Document-Management/hr-doc-request'
        },
        {
          title: 'View HR Documents',
          titleAr: 'عرض وثائق الموارد البشرية',
          icon: 'tabler:file-search',
          path: '/Document-Management/view-docs'
        },
        {
          title: 'View Payroll',
          titleAr: 'عرض كشوف المرتبات',
          icon: 'carbon:currency-dollar',
          path: '/Document-Management/payroll'
        },
        {
          title: 'Validate HR Documents',
          titleAr: 'المصادقة على وثيقة الموارد البشرية',
          icon: 'tabler:file-check',
          path: '/Document-Management/validate'
        }
      ]
    },
    {
      title: 'Reporting',
      titleAr: 'التقارير',
      icon: 'tabler:report-analytics',
      children: [
        {
          title: 'Clock In/Out',
          titleAr: 'تسجيل الدخول/الخروج ',
          icon: 'tabler:clock',
          path: '/Reporting/attendance'
        },
        {
          title: 'Non-Logged Status',
          titleAr: 'حالة غير مسجلة',
          icon: 'tabler:user-off',
          path: '/Reporting/nonloged'
        },
        {
          title: 'Anomaly Type Report',
          titleAr: 'تقرير نوع الشذوذ',
          icon: 'tabler:alert-circle',
          path: '/Reporting/anomalies'
        },
        {
          title: 'Lunch Break Exceedance',
          titleAr: 'تجاوز فترة الغداء',
          icon: 'tabler:clock-shield',
          path: '/Reporting/lunch'
        },
        {
          title: 'Calculations Report',
          titleAr: 'تقرير الحسابات',
          icon: 'tabler:calculator',
          path: '/Reporting/calculation'
        },
        {
          title: 'Events Report',
          titleAr: 'تقرير الأحداث',
          icon: 'tabler:calendar',
          path: '/Reporting/events'
        },
        {
          title: 'Good Exit Report',
          titleAr: 'تقرير الخروج الجيد',
          icon: 'tabler:clock-check',
          path: '/Reporting/good-exit'
        },
        {
          title: 'Unjustified Absence',
          titleAr: 'غياب غير مبرر',
          icon: 'tabler:bell-z-filled',
          path: '/Reporting/unjustified'
        },
        {
          title: 'Undefined Time',
          titleAr: 'وقت غير محدد',
          icon: 'tabler:clock-x',
          path: '/Reporting/undefinedTime'
        },
        {
          title: 'Worked Hours',
          titleAr: 'ساعات العمل',
          icon: 'tabler:briefcase',
          path: '/Reporting/workHours'
        },
        {
          title: 'Lateness Report',
          titleAr: 'تقرير التأخر',
          icon: 'fa-solid:clock',
          path: '/Reporting/latenessReport'
        },
        {
          title: 'Document Recap',
          titleAr: 'ملخص الوثائق',
          icon: 'tabler:clock-search',
          path: '/Reporting/recap'
        }
      ]
    },
    {
      title: 'Tools',
      titleAr: 'الأدوات',
      icon: 'tabler:tools',
      children: [
        {
          title: 'Calculate Attendance',
          titleAr: 'حساب الحضور',
          icon: 'tabler:calendar',
          path: '/Tools/calculateAttendance'
        },
        {
          title: 'Retrieve Attendance',
          titleAr: 'استرجاع الحضور',
          icon: 'tabler:download',
          path: '/Tools/getAttendance'
        },
        {
          title: 'Manual Attendance',
          titleAr: 'حضور يدوي',
          icon: 'tabler:user-plus',
          path: '/Tools/manualAttendance'
        },
        {
          title: 'Attendance Management',
          titleAr: 'إدارة الحضور',
          icon: 'tabler:list-check',
          path: '/Tools/attendanceManagement'
        },
        {
          title: 'Overtime Management',
          titleAr: 'إدارة الساعات الإضافية',
          icon: 'tabler:alarm',
          path: '/Tools/overtime'
        }
      ]
    },
    {
      title: 'Settings',
      titleAr: 'الإعدادات',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Company Information',
          titleAr: 'معلومات الشركة',
          icon: 'tabler:building',
          path: 'settings/companyInfo'
        },
        {
          title: 'Authorizations',
          titleAr: 'التراخيص',
          icon: 'tabler:lock-2',
          path: 'settings/authorization'
        },
        {
          title: 'Work Schedules',
          titleAr: 'جداول العمل',
          icon: 'tabler:calendar',
          path: 'settings/workSchedule'
        },
        {
          title: 'Shift Planning',
          titleAr: 'تخطيط الورديات',
          icon: 'tabler:clock',
          path: 'settings/shiftPlanning'
        },
        {
          title: 'Document Management',
          titleAr: 'إدارة الوثائق',
          icon: 'tabler:file',
          path: 'settings/documents'
        },
        {
          title: 'Holidays and Vacations',
          titleAr: 'الأعياد والإجازات',
          icon: 'tabler:sun',
          path: 'settings/holidaysVacation'
        },
        {
          title: 'Categories',
          titleAr: 'الفئات',
          icon: 'tabler:tag',
          path: 'settings/categories'
        },
        {
          title: 'Processing Code',
          titleAr: 'رمز المعالجة',
          icon: 'tabler:password',
          path: 'settings/processingCode'
        },
        {
          title: 'Requests by Profile',
          titleAr: 'الطلبات حسب الملف الشخصي',
          icon: 'fa-solid:user-check',
          path: 'settings/requestsProfile'
        },
        {
          title: 'Traceability',
          titleAr: 'التتبع',
          icon: 'tabler:map-pin',
          path: 'settings/traceability'
        },
        {
          title: 'Bonus',
          titleAr: 'مكافأة',
          icon: 'tabler:gift',
          path: 'settings/bonus'
        },
        {
          title:'Email Configuration',
          titleAr:'إعدادات البريد الإلكتروني',
          icon:'tabler:mail',
          path:'settings/emailConfigurations'
        }
      ]
    }
  ]
}

export default navigation

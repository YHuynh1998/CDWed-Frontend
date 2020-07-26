import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Quản lý nhân sự'
  },
  {
    name: 'Quản lý nhân viên',
    url: '/quan-ly-nhan-vien',
    icon: 'icon-user',
    children: [
      {
        name: 'Danh sách nhân viên',
        url: '/quan-ly-nhan-vien/danh-sach-nhan-vien'
      },
      {
        name: 'Thông tin cơ bản',
        url: '/quan-ly-nhan-vien/thong-tin-co-ban'
      },
      {
        name: 'Giấy tờ tùy thân',
        url: '/quan-ly-nhan-vien/giay-to-tuy-than'
      },
      {
        name: 'Bằng cấp',
        url: '/quan-ly-nhan-vien/bang-cap'
      }
    ]
  },
  {
    name: 'Quản lý công việc',
    url: '/quan-ly-cong-viec',
    icon: 'icon-briefcase',
    children: [
      {
        name: 'Thông tin công việc',
        url: '/quan-ly-cong-viec/thong-tin-cong-viec'
      },
      {
        name: 'Job Test',
        url: '/quan-ly-cong-viec/congviet'
      },
      {
        name: 'Phòng ban',
        url: '/quan-ly-cong-viec/phong-ban'
      },
      {
        name: 'Lich công tác',
        url: '/quan-ly-cong-viec/lich-cong-tac'
      }
    ]
  },
  {
    name: 'Quản lý thời gian',
    url: '/quan-ly-thoi-gian',
    icon: 'icon-clock',
    children: [
      {
        name: 'Thời gian làm việc',
        url: '/quan-ly-thoi-gian/thoi-gian-lam-viec'
      },
      {
        name: 'Khung giờ',
        url: '/quan-ly-thoi-gian/khung-gio'
      },
      {
        name: 'Time Test',
        url: '/quan-ly-thoi-gian/time-test'
      }
    ]
  },
  {
    name: 'Quản lý chấm công',
    url: '/quan-ly-cham-cong',
    icon: 'icon-check',
  },
  {
    name: 'Quản lý vị trí',
    url: '/quan-ly-vị-tri',
    icon: 'icon-location-pin',
    children: [
      {
        name: 'Phường-Xã',
        url: '/quan-ly-vi-tri/phuong-xa'
      },
      {
        name: 'Quận-Huyện',
        url: '/quan-ly-vi-tri/quan-huyen'
      },
      {
        name: 'Tỉnh-Thành phố',
        url: '/quan-ly-vi-tri/tinh-thanh-pho'
      }
    ]
  }
];

export interface School {
  kode_prop: string;
  propinsi: string;
  kode_kab_kota: string;
  kabupaten_kota: string;
  kode_kec: string;
  kecamatan: string;
  id: string;
  npsn: string;
  sekolah: string;
  bentuk: string;     // SD / SMP / SMA / SMK
  status: string;     // S or N
  alamat_jalan: string;
  lintang: string;    // latitude
  bujur: string;      // longitude
}

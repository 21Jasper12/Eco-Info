import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.scss']
})
export class TestFileComponent implements OnInit {


  ngOnInit(): void {
    AOS.init();
  }

  // @ViewChild('parallaxBg') parallaxBg!: ElementRef;

  // @HostListener('window:scroll', ['$event'])

  // onScroll(event: Event) {
  //   const scrollTop = (event.target as Element).scrollTop;
  //   console.error('scroll事件: ', scrollTop);

  //   // 計算放大比例，最大放大至原先圖片的三倍大
  //   const scale = Math.min(3, 1 + scrollTop * 0.001);

  //   // 設置圖片放大比例
  //   this.parallaxBg.nativeElement.style.transform = `scale(${scale})`;

  //   // 計算並設置圖片寬度和高度，最大放大至原先圖片的三倍大
  //   const newWidth = Math.min(100 * scale, 30); // 最大寬度為原先的三倍（30%）
  //   const newHeight = Math.min(100 * scale, 30); // 最大高度為原先的三倍（30%）
  //   this.parallaxBg.nativeElement.style.width = `${newWidth}%`;
  //   this.parallaxBg.nativeElement.style.height = `${newHeight}%`;
  // }
}

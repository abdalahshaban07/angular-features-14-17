import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EnvironmentInjector, Injector, OnDestroy, OnInit, inject, runInInjectionContext } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>test works!</p>`,
  styleUrl: './test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit, OnDestroy {
  private destroyRef = inject(DestroyRef)
  private injector = inject(Injector);
  counter$ = interval(1000);

  destroy$ = new Subject<void>();
  constructor() {
    // here is an injection context
    // this.counter$.pipe(takeUntilDestroyed()).subscribe((res) => {
    //   console.log(res);
    // });
  }

  ngOnInit(): void {
    // here is not an injection context
    // this.counter$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
    //   console.log(res);
    // });

    // this.counter$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
    //   console.log(res);
    // });

    // runInInjectionContext(this.injector, () => {
    //   this.counter$.pipe(takeUntilDestroyed()).subscribe((res) => {
    //     console.log(res);
    //   });
    // });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
